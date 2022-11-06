import React from "react";
import {
  AnswerItemContainer,
  UserImg,
  QuestionerName,
  LeftSideWrapper,
  Text,
  AnswerDetailContainer,
  Title,
  UpSideWrapper,
  RightSideWrapper,
} from "./styled";
import userPhoto from "./userPhoto.png";
import { AnswerItemProps } from "./types";
import { AnswerStatus } from "~/components/atoms/AnswerStatus";

const AnswerItem = React.memo(
  ({ isSelected, askedQuestionItem, onClick }: AnswerItemProps) => {
    return (
      <AnswerItemContainer onClick={onClick} isSelected={isSelected}>
        <UpSideWrapper>
          <LeftSideWrapper>
            <UserImg src={userPhoto} />
            <QuestionerName>{askedQuestionItem.questioner_name}</QuestionerName>
          </LeftSideWrapper>
          <RightSideWrapper>
            <AnswerStatus
              answerStatus={askedQuestionItem.question.question_status}
            ></AnswerStatus>
          </RightSideWrapper>
        </UpSideWrapper>
        <AnswerDetailContainer>
          <Title>{"｜" + askedQuestionItem.question.title}</Title>
          <Text>{askedQuestionItem.question.text}</Text>
        </AnswerDetailContainer>
      </AnswerItemContainer>
    );
  }
);

export default AnswerItem;
