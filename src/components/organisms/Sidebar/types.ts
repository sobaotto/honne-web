import { showingPagePath, User } from "~/types";

export type SidebarProps = {
  user: User | null;
  setShowingPagePath: React.Dispatch<React.SetStateAction<showingPagePath>>;
  showingPagePath: showingPagePath;
};
