import React from "react";
import Profile from "~/components/molecules/Profile";
import NavigationItems from "~/components/molecules/NavigationItems";
import { Container } from "./styled";
import { SidebarProps } from "./types";

const Sidebar = React.memo(
  ({
    currentUser,
    setShowingPagePath,
    showingPagePath,
    setCurrentUser,
  }: SidebarProps) => {
    return (
      <Container>
        <Profile currentUser={currentUser} />
        <NavigationItems
          setCurrentUser={setCurrentUser}
          setShowingPagePath={setShowingPagePath}
          showingPagePath={showingPagePath}
        />
      </Container>
    );
  }
);

export default Sidebar;
