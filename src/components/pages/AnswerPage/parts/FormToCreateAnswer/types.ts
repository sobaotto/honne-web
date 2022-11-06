import { askedQuestionItem } from "~/types";

export type FormToCreateAnswerProps = {
  askedQuestionItem: askedQuestionItem;
  fetchAnswers: () => void;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export type FormData = {
  text: string;
};
