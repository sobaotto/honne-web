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
  ({ isSelected, questionItem, onClick }: QuestionItemProps) => {
    return (
      <QuestionItemContainer onClick={onClick} isSelected={isSelected}>
        <UpSideWrapper>
          <LeftSideWrapper>
            <UserImg src={userPhoto} />
            <RespondentName>{questionItem.respondent_name}</RespondentName>
          </LeftSideWrapper>
          <RightSideWrapper>
            <QuestionStatus
              questionStatus={questionItem.question.question_status}
            ></QuestionStatus>
          </RightSideWrapper>
        </UpSideWrapper>
        <QuestionDetailContainer>
          <Title>{"｜" + questionItem.question.title}</Title>
          <Text>{questionItem.question.text}</Text>
        </QuestionDetailContainer>
      </QuestionItemContainer>
    );
  }
);

export default QuestionItem;
