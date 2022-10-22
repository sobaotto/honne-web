import React, { useEffect } from "react";
import { User } from "~/types/types";
import { LoginParams } from "./types";

export const useLogin = (params: LoginParams) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
        setIsLoading(false);
      });
  }, []);

  return {
    currentUser,
    isLoading,
  };
};
