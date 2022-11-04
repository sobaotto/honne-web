import { showingPagePath } from "~/types";

export type SideNavigationProps = {
  setShowingPagePath: React.Dispatch<React.SetStateAction<showingPagePath>>;
  showingPagePath: showingPagePath;
};
