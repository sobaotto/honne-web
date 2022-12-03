import { askedQuestionItem } from "~/types";

export type FormToCreateAnswerProps = {
  askedQuestionItem: askedQuestionItem;
  fetchAnswers: () => void;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type FormData = {
  text: string;
};
