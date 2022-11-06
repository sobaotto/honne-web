import { RiQuestionAnswerLine } from "react-icons/ri";
import React from "react";
import { px2rem } from "~/styles/utils";
import { showingPagePath } from "~/types";

const ICON_SIZE = px2rem(24);

type NavigationItem = { path: showingPagePath; icon: any };

export const NAVIGATION_ITEMS = [
  { path: "home", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
  { path: "questions", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
  { path: "answers", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
  { path: "contacts", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
  { path: "settings", icon: <RiQuestionAnswerLine size={ICON_SIZE} /> },
] as Array<NavigationItem>;
