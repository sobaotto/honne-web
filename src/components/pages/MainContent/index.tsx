import React from "react";
import { useTranslation } from "react-i18next";
import { useQuestion } from "~/hooks/useQuestion";
import FormToCreateQuestion from "./parts/FormToCreateQuestion";
import QuestionItem from "./parts/QuestionItem";
import {
  Container,
  QuestionsContainer,
  QuestionDetail,
  HeaderContainer,
  Title,
  ButtonToCreateNewQuestion,
  QuestionItemsWrapper,
} from "./styled";

const MainContent = React.memo(() => {
  const [t] = useTranslation();
  const { questions, isLoading, setIsPosted } = useQuestion();
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
        <QuestionItemsWrapper>
          {questions &&
            questions.map((question, index) => {
              return (
                <QuestionItem
                  isSelected={index === selectedQuestionIndex}
                  question={question}
                  onClick={() => {
                    index === selectedQuestionIndex
                      ? setSelectedQuestionIndex(null)
                      : setSelectedQuestionIndex(index);

                    setIsCreatingQuestion(false);
                  }}
                />
              );
            })}
        </QuestionItemsWrapper>
      </QuestionsContainer>
      {isCreatingQuestion ? (
        <FormToCreateQuestion
          setIsPosted={setIsPosted}
          setSelectedQuestionIndex={setSelectedQuestionIndex}
          setIsCreatingQuestion={setIsCreatingQuestion}
        />
      ) : (
        <QuestionDetail>
          {selectedQuestionIndex !== null && questions && (
            <>
              <div>{"｜" + questions[selectedQuestionIndex].title}</div>
              <div>{questions[selectedQuestionIndex].text}</div>
            </>
          )}
        </QuestionDetail>
      )}
    </Container>
  );
});

export default MainContent;
