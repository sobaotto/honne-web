import { UseFormHandleSubmit, UseFormReset } from "react-hook-form";
import { FormData } from "~/components/pages/LoginPage/types";
import { User } from "~/types";

export type useSignUpProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  handleSubmit: UseFormHandleSubmit<FormData>;
};
