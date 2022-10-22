import React from "react";
import Profile from "~/components/molecules/Profile";
import SideNavigation from "~/components/molecules/SideNavigation";
import { Container } from "./styled";
import { SidebarProps } from "./types";

const Sidebar = React.memo(({ user }: SidebarProps) => {
  return (
    <Container>
      <Profile user={user} />
      <SideNavigation />
    </Container>
  );
});
export default Sidebar;
