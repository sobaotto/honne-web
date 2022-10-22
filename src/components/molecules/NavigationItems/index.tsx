import React from "react";
import NavItem from "~/components/atoms/NavItem";
import {
  LOGOUT_ITEM,
  NAVIGATION_ITEMS,
} from "~/components/atoms/NavItem/constant";
import { Container, ItemWrapper } from "./styled";

// 今は雛形作ったので、後でreact-routerとか導入する
const SideNavigation = React.memo(() => {
  return (
    <Container>
      <ItemWrapper>
        {Object.values(NAVIGATION_ITEMS).map((item) => (
          <NavItem item={item} />
        ))}
      </ItemWrapper>
      <NavItem item={LOGOUT_ITEM} />
    </Container>
  );
});

export default SideNavigation;
