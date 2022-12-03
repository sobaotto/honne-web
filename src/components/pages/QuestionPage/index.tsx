import React from "react";
import { useTranslation } from "react-i18next";
import QuestionItems from "~/components/molecules/QuestionItems";
import Chat from "~/components/organisms/Chat";
import { useQuestion } from "~/hooks/useQuestion";
import FormToCreateQuestion from "./parts/FormToCreateQuestion";
import {
  Container,
  QuestionsContainer,
  HeaderContainer,
  Title,
  ButtonToCreateNewQuestion,
} from "./styled";
import { QuestionPageProps } from "./types";

const QuestionPage = React.memo(
  ({ showingPagePath, currentUser }: QuestionPageProps) => {
    const [t] = useTranslation();
    const { questionItems, isLoading, fetchQuestions } = useQuestion({
      currentUser,
      showingPagePath,
    });
    const [selectedQuestionIndex, setSelectedQuestionIndex] =
      React.useState<number>(0);
    const [isCreatingQuestion, setIsCreatingQuestion] =
      React.useState<boolean>(false);

    return (
      <Container>
        {isLoading ? (
          <div>ローディング中</div>
        ) : (
          <>
            <QuestionsContainer>
              <HeaderContainer>
                <Title>Questions</Title>
                <ButtonToCreateNewQuestion
                  onClick={() => {
                    setIsCreatingQuestion(true);
                  }}
                >
                  {t("createNewQuestion")}
                </ButtonToCreateNewQuestion>
              </HeaderContainer>
              <QuestionItems
                questionItems={questionItems}
                selectedQuestionIndex={selectedQuestionIndex}
                setSelectedQuestionIndex={setSelectedQuestionIndex}
                setIsCreatingQuestion={setIsCreatingQuestion}
              />
            </QuestionsContainer>
            {isCreatingQuestion ? (
              <FormToCreateQuestion
                currentUser={currentUser}
                fetchQuestions={fetchQuestions}
                setSelectedQuestionIndex={setSelectedQuestionIndex}
                setIsCreatingQuestion={setIsCreatingQuestion}
              />
            ) : (
              <Chat questionItem={questionItems[selectedQuestionIndex]} />
            )}
          </>
        )}
      </Container>
    );
  }
);

export default QuestionPage;
