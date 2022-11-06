import React from "react";
import { useTranslation } from "react-i18next";
import QuestionItems from "~/components/molecules/QuestionItems";
import { useQuestion } from "~/hooks/useQuestion";
import FormToCreateQuestion from "./parts/FormToCreateQuestion";
import {
  Container,
  QuestionsContainer,
  QuestionDetail,
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
    const [selectedQuestionIndex, setSelectedQuestionIndex] = React.useState<
      number | null
    >(null);
    const [isCreatingQuestion, setIsCreatingQuestion] =
      React.useState<boolean>(false);

    return (
      <Container>
        <QuestionsContainer>
          <HeaderContainer>
            <Title>Questions</Title>
            <ButtonToCreateNewQuestion
              onClick={() => {
                setSelectedQuestionIndex(null);
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
          <QuestionDetail>
            {selectedQuestionIndex !== null && questionItems.length && (
              <>
                <br />
                <div>
                  <u>タイトル</u>
                </div>
                <div>{questionItems[selectedQuestionIndex].question.title}</div>
                <br />
                <div>
                  <u>質問内容</u>
                </div>
                <div>{questionItems[selectedQuestionIndex].question.text}</div>
                {questionItems[selectedQuestionIndex].answer && (
                  <>
                    <br />
                    <hr />
                    <br />
                    <div>
                      <u>回答内容</u>
                    </div>
                    <div>
                      {questionItems[selectedQuestionIndex].answer?.text}
                    </div>
                  </>
                )}
              </>
            )}
          </QuestionDetail>
        )}
      </Container>
    );
  }
);

export default QuestionPage;
