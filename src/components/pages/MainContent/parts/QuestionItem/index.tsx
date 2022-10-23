import React from "react";
import {
  QuestionItemContainer,
  UserImg,
  RespondentName,
  LeftSideWrapper,
  Text,
  QuestionDetailContainer,
  Title,
} from "./styled";
import userPhoto from "./userPhoto.png";
import { QuestionItemProps } from "./types";

const QuestionItem = React.memo(
  ({ isSelected, question, onClick }: QuestionItemProps) => {
    return (
      <QuestionItemContainer onClick={onClick} isSelected={isSelected}>
        <LeftSideWrapper>
          <UserImg src={userPhoto} />
          <RespondentName>{question.respondentName}</RespondentName>
        </LeftSideWrapper>
        <QuestionDetailContainer>
          <Title>{"｜" + question.title}</Title>
          <Text>{question.text}</Text>
        </QuestionDetailContainer>
      </QuestionItemContainer>
    );
  }
);

export default QuestionItem;
