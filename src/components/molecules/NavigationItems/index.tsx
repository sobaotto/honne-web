import React from "react";
import LogoutNav from "~/components/atoms/LogoutNav";
import NavItem from "~/components/atoms/NavItem";
import { NAVIGATION_ITEMS } from "~/components/atoms/NavItem/constant";
import { Container, ItemWrapper } from "./styled";
import { SideNavigationProps } from "./types";

// 今は雛形作ったので、後でreact-routerとか導入する
const SideNavigation = React.memo(
  ({
    setShowingPagePath,
    showingPagePath,
    setCurrentUser,
  }: SideNavigationProps) => {
    return (
      <Container>
        <ItemWrapper>
          {Object.values(NAVIGATION_ITEMS).map((item) => (
            <NavItem
              item={item}
              setShowingPagePath={setShowingPagePath}
              showingPagePath={showingPagePath}
            />
          ))}
        </ItemWrapper>
        <LogoutNav
          setCurrentUser={setCurrentUser}
          setShowingPagePath={setShowingPagePath}
          showingPagePath={showingPagePath}
        />
      </Container>
    );
  }
);

export default SideNavigation;
