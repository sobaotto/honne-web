export type NavItemProps = {
  item: Item;
};

export type LinkProps = {
  currentPath: string;
};

type Item = {
  path: string;
  icon: JSX.Element;
};
