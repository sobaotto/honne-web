import React from "react";
import NavItem from "~/components/atoms/NavItem";
import {
  LOGOUT_ITEM,
  NAVIGATION_ITEMS,
} from "~/components/atoms/NavItem/constant";
import { Container, ItemWrapper } from "./styled";
import { SideNavigationProps } from "./types";

// 今は雛形作ったので、後でreact-routerとか導入する
const SideNavigation = React.memo(
  ({ setShowingPagePath, showingPagePath }: SideNavigationProps) => {
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
        <NavItem
          item={LOGOUT_ITEM}
          setShowingPagePath={setShowingPagePath}
          showingPagePath={showingPagePath}
        />
      </Container>
    );
  }
);

export default SideNavigation;
