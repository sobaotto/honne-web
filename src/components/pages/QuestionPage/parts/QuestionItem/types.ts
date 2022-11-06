import { MouseEventHandler } from "react";
import { QuestionItem } from "~/types";

export type QuestionItemProps = {
  isSelected: boolean;
  questionItem: QuestionItem;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export type QuestionItemContainerProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
};
