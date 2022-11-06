import React from "react";
import { Container, UserImg, Username } from "./styled";
import { ProfileProps } from "./types";
import userPhoto from "./userPhoto.png";

const Profile = React.memo(({ currentUser }: ProfileProps) => {
  return (
    <Container>
      <UserImg src={userPhoto} />
      <Username>{currentUser ? currentUser.name : "-"}</Username>
    </Container>
  );
});

export default Profile;
