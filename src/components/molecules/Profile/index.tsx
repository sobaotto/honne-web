import React from "react";
import { Container, UserImg, Username } from "./styled";
import { ProfileProps } from "./types";
import userPhoto from "./userPhoto.png";

const Profile = React.memo(({ user }: ProfileProps) => {
  return (
    <Container>
      <UserImg src={userPhoto} />
      <Username>{user ? user.name : "-"}</Username>
    </Container>
  );
});

export default Profile;
