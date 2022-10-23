import { MouseEventHandler } from "react";
import { Question } from "~/types";

export type QuestionItemProps = {
  isSelected: boolean;
  question: Question;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export type QuestionItemContainerProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  isSelected: boolean;
};
