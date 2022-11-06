import { askedQuestionItem } from "~/types";

export type FormToCreateAnswerProps = {
  askedQuestionItem: askedQuestionItem;
  setIsPosted: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export type FormData = {
  text: string;
};
