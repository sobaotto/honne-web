import React from "react";
import { useSessionProps } from "./types";

export const useSession = ({ setCurrentUser }: useSessionProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  (() => {
    fetch(`http://localhost:3001/me`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setCurrentUser(data);
        setIsLoading(false);
      });
  })();

  return {
    isLoading,
  };
};
