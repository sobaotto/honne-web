import React from "react";
import MainContent from "./components/pages/MainContent";
import Sidebar from "./components/organisms/Sidebar";
import { Container } from "./styles/styled";
import { useLogin } from "./hooks/useLogin";
import { LoginParams } from "./hooks/useLogin/types";

export const App = () => {
  const [loginParams, setLoginParams] = React.useState<LoginParams>({
    name: "taro",
    email: "taro@test.com",
    password: "password",
    password_confirmation: "password",
  });

  const { currentUser, isLoading } = useLogin(loginParams);

  return (
    <Container>
      {/* <button onClick={() => useLogin(loginParams)}>ログイン</button> */}
      <Sidebar user={currentUser} />
      {currentUser && <MainContent />}
    </Container>
  );
};
