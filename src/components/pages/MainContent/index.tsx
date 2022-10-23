import React from "react";
import { useTranslation } from "react-i18next";
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

const questions = [
  {
    respondentName: "はなこ",
    title: "初めての質問です",
    text: "〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、",
    questionStatus: "unresolved",
  },
  {
    respondentName: "たろう",
    title: "2回目の質問です",
    text: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    questionStatus: "unresolved",
  },
  {
    respondentName: "なおと",
    title: "3回目の質問です",
    text: "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
    questionStatus: "resolved",
  },
  {
    respondentName: "はなこ",
    title: "初めての質問です",
    text: "〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、",
    questionStatus: "unresolved",
  },
  {
    respondentName: "たろう",
    title: "2回目の質問です",
    text: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    questionStatus: "unresolved",
  },
  {
    respondentName: "なおと",
    title: "3回目の質問です",
    text: "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
    questionStatus: "resolved",
  },
  {
    respondentName: "はなこ",
    title: "初めての質問です",
    text: "〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、",
    questionStatus: "unresolved",
  },
  {
    respondentName: "たろう",
    title: "2回目の質問です",
    text: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    questionStatus: "unresolved",
  },
  {
    respondentName: "なおと",
    title: "3回目の質問です",
    text: "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
    questionStatus: "resolved",
  },
  {
    respondentName: "はなこ",
    title: "初めての質問です",
    text: "〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、〇〇さんは、〇〇で、〇〇なので、",
    questionStatus: "unresolved",
  },
  {
    respondentName: "たろう",
    title: "2回目の質問です",
    text: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    questionStatus: "unresolved",
  },
  {
    respondentName: "なおと",
    title: "3回目の質問です",
    text: "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
    questionStatus: "resolved",
  },
];

const MainContent = React.memo(() => {
  const [t] = useTranslation();
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
          {questions.map((question, index) => {
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
          {selectedQuestionIndex !== null && (
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
