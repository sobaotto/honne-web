import React from "react";
import { NavIconWrapper, SelectedBar, Link, NavTitle } from "./styled";
import { NavItemProps } from "./types";

export const NavItem = React.memo(
  ({ item, setShowingPagePath, showingPagePath }: NavItemProps) => {
    return (
      <Link
        href={`#${item.path}`}
        showingPagePath={showingPagePath}
        navItemPath={item.path}
        onClick={() => setShowingPagePath(item.path)}
      >
        {showingPagePath === item.path ? <SelectedBar /> : null}
        <NavIconWrapper>{item.icon}</NavIconWrapper>
        <NavTitle>{item.path}</NavTitle>
      </Link>
    );
  }
);

export default NavItem;
