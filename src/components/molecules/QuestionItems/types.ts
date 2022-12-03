import { QuestionItem } from "~/types";

export type QuestionItemsProps = {
  questionItems: Array<QuestionItem>;
  selectedQuestionIndex: number;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsCreatingQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};
