import { askedQuestionItem } from "~/types";

export type QuestionItemsProps = {
  askedQuestionItems: Array<askedQuestionItem>;
  selectedQuestionIndex: number;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
};
