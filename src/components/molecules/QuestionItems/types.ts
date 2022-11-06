import { QuestionItem } from "~/types";

export type QuestionItemsProps = {
  questionItems: Array<QuestionItem>;
  selectedQuestionIndex: number | null;
  setSelectedQuestionIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setIsCreatingQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};
