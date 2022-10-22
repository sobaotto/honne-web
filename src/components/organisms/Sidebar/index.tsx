import React from "react";
import Profile from "~/components/molecules/Profile";
import NavigationItems from "~/components/molecules/NavigationItems";
import { Container } from "./styled";
import { SidebarProps } from "./types";

const Sidebar = React.memo(({ user }: SidebarProps) => {
  return (
    <Container>
      <Profile user={user} />
      <NavigationItems />
    </Container>
  );
});

export default Sidebar;
