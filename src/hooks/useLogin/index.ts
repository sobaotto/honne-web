import React from "react";
import { useLoginProps } from "./types";

export const useLogin = ({
  setCurrentUser,
  handleSubmit,
  reset,
}: useLoginProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const onSubmit = handleSubmit(async (formData) => {
    await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setCurrentUser(data);
        setIsLoading(false);

        reset({
          name: "",
          email: "",
          password: "",
        });
      });
  });

  return {
    isLoading,
    onSubmit,
  };
};
