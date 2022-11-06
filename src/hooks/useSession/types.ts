import { User } from "~/types";

export type useSessionProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};
