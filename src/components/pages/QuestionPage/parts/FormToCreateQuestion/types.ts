import { User } from "~/types";

export type FormToCreateQuestionProps = {
  currentUser: User;
  fetchQuestions: () => void;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setIsCreatingQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FormData = {
  title: string;
  text: string;
  is_public: boolean;
  respondent_id: number;
};
