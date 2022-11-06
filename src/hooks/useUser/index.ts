import React from "react";
import { User } from "~/types";

export const useUser = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch(`http://localhost:3001/users`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return {
    users,
    isLoading,
  };
};
