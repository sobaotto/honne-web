import { MouseEventHandler } from "react";
import { showingPagePath, User } from "~/types";

export type ButtonToCreateNewQuestionProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
};

export type QuestionPageProps = {
  currentUser: User;
  showingPagePath: showingPagePath;
};
