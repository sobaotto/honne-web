import { showingPagePath, User } from "~/types";

export type LogoutNavProps = {
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  setShowingPagePath: React.Dispatch<React.SetStateAction<showingPagePath>>;
  showingPagePath: showingPagePath;
};

export type LinkProps = {
  navItemPath: showingPagePath;
  showingPagePath: showingPagePath;
};
