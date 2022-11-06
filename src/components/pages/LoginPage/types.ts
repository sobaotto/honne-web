import { User } from "~/types";

export type LoginPageProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type FormData = {
  name: string;
  email: string;
  password: string;
};
