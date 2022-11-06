import { MouseEventHandler } from "react";
import { askedQuestionItem } from "~/types";

export type AnswerItemProps = {
  isSelected: boolean;
  askedQuestionItem: askedQuestionItem;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export type AnswerItemContainerProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
};
