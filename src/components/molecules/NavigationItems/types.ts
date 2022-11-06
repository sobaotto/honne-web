import { showingPagePath, User } from "~/types";

export type SideNavigationProps = {
  setShowingPagePath: React.Dispatch<React.SetStateAction<showingPagePath>>;
  showingPagePath: showingPagePath;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};
