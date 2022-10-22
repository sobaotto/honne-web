import { RiQuestionAnswerLine } from "react-icons/ri";
import React from "react";
import { px2rem } from "~/styles/utils";

const ICON_SIZE = px2rem(24);

export const NAVIGATION_ITEMS = [
  { path: "home", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
  { path: "questions", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
  { path: "answers", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
  { path: "contact", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
  { path: "settings", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
];

export const LOGOUT_ITEM = {
  path: "logout",
  icon: <RiQuestionAnswerLine size={ICON_SIZE} />,
};
