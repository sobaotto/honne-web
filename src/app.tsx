import React from "react";
import QuestionPage from "./components/pages/QuestionPage";
import Sidebar from "./components/organisms/Sidebar";
import { Container } from "./styles/styled";
import { useLogin } from "./hooks/useLogin";
import { LoginParams } from "./hooks/useLogin/types";
import { showingPagePath } from "./types";
import AnswerPage from "./components/pages/AnswerPage";

export const App = () => {
  const [loginParams, setLoginParams] = React.useState<LoginParams>({
    name: "taro",
    email: "taro@test.com",
    password: "password",
    password_confirmation: "password",
  });

  const { currentUser, isLoading } = useLogin(loginParams);

  const [showingPagePath, setShowingPagePath] =
    React.useState<showingPagePath>("questions");

  return (
    <Container>
      {/* <button onClick={() => useLogin(loginParams)}>ログイン</button> */}
      <Sidebar
        user={currentUser}
        setShowingPagePath={setShowingPagePath}
        showingPagePath={showingPagePath}
      />
      {currentUser && showingPagePath === "questions" ? (
        <QuestionPage />
      ) : (
        <AnswerPage />
      )}
    </Container>
  );
};
