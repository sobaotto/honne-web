import { askedQuestionItem } from "~/types";

export type QuestionItemsProps = {
  askedQuestionItems: Array<askedQuestionItem>;
  selectedQuestionIndex: number | null;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number | null>>;
};
