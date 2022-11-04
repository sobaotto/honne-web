import { showingPagePath } from "~/types";

export type NavItemProps = {
  item: Item;
  setShowingPagePath: React.Dispatch<React.SetStateAction<showingPagePath>>;
  showingPagePath: showingPagePath;
};

export type LinkProps = {
  navItemPath: showingPagePath;
  showingPagePath: showingPagePath;
};

type Item = {
  path: showingPagePath;
  icon: JSX.Element;
};
