import React from "react";
import { useSignUpProps } from "./types";

export const useSignUp = ({
  setCurrentUser,
  handleSubmit,
}: useSignUpProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const onSubmit = handleSubmit(async (formData) => {
    await fetch("http://localhost:3001/users", {
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
      });
  });

  return {
    isLoading,
    onSubmit,
  };
};
