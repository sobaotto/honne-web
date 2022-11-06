import { User } from "~/types";

export type SignUpPageProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
