import React from "react";
import { LOGOUT_ITEM } from "./constant";
import { NavIconWrapper, SelectedBar, Link, NavTitle } from "./styled";
import { LogoutNavProps } from "./types";

export const LogoutNav = React.memo(
  ({ setShowingPagePath, showingPagePath, setCurrentUser }: LogoutNavProps) => {
    const Logout = React.useCallback(() => {
      fetch(`http://localhost:3001/logout`, {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
      }).then((res) => {
        setCurrentUser(null);
        setShowingPagePath("questions");
      });
    }, [setCurrentUser, setShowingPagePath]);

    return (
      <Link
        href={`#${LOGOUT_ITEM.path}`}
        showingPagePath={showingPagePath}
        navItemPath={LOGOUT_ITEM.path}
        onClick={() => {
          Logout();
          setShowingPagePath(LOGOUT_ITEM.path);
        }}
      >
        {showingPagePath === LOGOUT_ITEM.path ? <SelectedBar /> : null}
        <NavIconWrapper>{LOGOUT_ITEM.icon}</NavIconWrapper>
        <NavTitle>{LOGOUT_ITEM.path}</NavTitle>
      </Link>
    );
  }
);

export default LogoutNav;
