import React from "react";
import {
  QuestionItemContainer,
  UserImg,
  RespondentName,
  LeftSideWrapper,
  Text,
  QuestionDetailContainer,
  Title,
  UpSideWrapper,
  RightSideWrapper,
} from "./styled";
import userPhoto from "./userPhoto.png";
import { QuestionStatus } from "~/components/atoms/QuestionStatus";
import { QuestionItemProps } from "./types";

const QuestionItem = React.memo(
  ({ isSelected, question, onClick }: QuestionItemProps) => {
    return (
      <QuestionItemContainer onClick={onClick} isSelected={isSelected}>
        <UpSideWrapper>
          <LeftSideWrapper>
            <UserImg src={userPhoto} />
            <RespondentName>{question.respondentName}</RespondentName>
          </LeftSideWrapper>
          <RightSideWrapper>
            <QuestionStatus
              questionStatus={question.question_status}
            ></QuestionStatus>
          </RightSideWrapper>
        </UpSideWrapper>
        <QuestionDetailContainer>
          <Title>{"｜" + question.title}</Title>
          <Text>{question.text}</Text>
        </QuestionDetailContainer>
      </QuestionItemContainer>
    );
  }
);

export default QuestionItem;
