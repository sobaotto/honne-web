import React from "react";
import QuestionPage from "./components/pages/QuestionPage";
import Sidebar from "./components/organisms/Sidebar";
import { Container } from "./styles/styled";
import { showingPagePath, User } from "./types";
import AnswerPage from "./components/pages/AnswerPage";
import LoginPage from "./components/pages/LoginPage";
import { useSession } from "./hooks/useSession";

export const App = () => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const { isLoading } = useSession({ setCurrentUser });

  const [showingPagePath, setShowingPagePath] =
    React.useState<showingPagePath>("questions");

  return (
    <Container>
      {isLoading ? (
        <div>ローディング中</div>
      ) : !currentUser ? (
        <LoginPage setCurrentUser={setCurrentUser} />
      ) : (
        <>
          <Sidebar
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setShowingPagePath={setShowingPagePath}
            showingPagePath={showingPagePath}
          />
          {currentUser &&
            (showingPagePath === "questions" ? (
              <QuestionPage
                showingPagePath={showingPagePath}
                currentUser={currentUser}
              />
            ) : showingPagePath === "answers" ? (
              <AnswerPage showingPagePath={showingPagePath} />
            ) : (
              <div>未完成</div>
            ))}
        </>
      )}
    </Container>
  );
};
