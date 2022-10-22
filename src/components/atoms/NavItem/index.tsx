import React from "react";
import { NavIconWrapper, SelectedBar, Link, NavTitle } from "./styled";
import { NavItemProps } from "./types";

export const NavItem = React.memo(({ item }: NavItemProps) => {
  return (
    <Link href={`#${item.path}`} currentPath={item.path}>
      {item.path === "questions" ? <SelectedBar /> : null}
      <NavIconWrapper>{item.icon}</NavIconWrapper>
      <NavTitle>{item.path}</NavTitle>
    </Link>
  );
});

export default NavItem;
