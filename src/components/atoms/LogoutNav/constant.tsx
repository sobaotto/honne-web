import { RiQuestionAnswerLine } from "react-icons/ri";
import React from "react";
import { px2rem } from "~/styles/utils";
import { showingPagePath } from "~/types";

const ICON_SIZE = px2rem(24);

type NavigationItem = { path: showingPagePath; icon: any };

export const LOGOUT_ITEM = {
  path: "logout",
  icon: <RiQuestionAnswerLine size={ICON_SIZE} />,
} as NavigationItem;
