import React from "react";
import {
  Container,
  HeaderContainer,
  RespondentImg,
  RespondentName,
  ChatContainer
} from "./styled";
import { ChatProps } from "./types";
import userPhoto from "./userPhoto.png";

const Chat = React.memo(({ questionItem }: ChatProps) => {
  return (
    <Container>
      <HeaderContainer>
        <RespondentImg src={userPhoto} />
        <RespondentName>{questionItem.respondent.name}</RespondentName>
      </HeaderContainer>
      <ChatContainer>
        <br />
        <div>
          <u>タイトル</u>
        </div>
        <div>{questionItem.question.title}</div>
        <br />
        <div>
          <u>質問内容</u>
        </div>
        <div>{questionItem.question.text}</div>
        {questionItem.answer && (
          <>
            <br />
            <hr />
            <br />
            <div>
              <u>回答内容</u>
            </div>
            <div>{questionItem.answer?.text}</div>
          </>
        )}
      </ChatContainer>
    </Container>
  );
});

export default Chat;
