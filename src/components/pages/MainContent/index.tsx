import React from "react";
import { useTranslation } from "react-i18next";
import { useQuestion } from "~/hooks/useQuestion";
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

  return (
    <Container>
      <QuestionsContainer>
        <HeaderContainer>
          <Title>Questions</Title>
          <ButtonToCreateNewQuestion
            onClick={() => {
              setSelectedQuestionIndex(null);
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
                  }}
                />
              );
            })}
        </QuestionItemsWrapper>
      </QuestionsContainer>
      <QuestionDetail>
        {selectedQuestionIndex !== null && questions && (
          <>
            <div>{"｜" + questions[selectedQuestionIndex].title}</div>
            <div>{questions[selectedQuestionIndex].text}</div>
          </>
        )}
      </QuestionDetail>
    </Container>
  );
});

export default MainContent;
