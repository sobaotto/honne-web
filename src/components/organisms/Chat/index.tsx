import React from "react";
import { Container } from "./styled";
import { ChatProps } from "./types";

const Chat = React.memo(({ questionItem }: ChatProps) => {
  return (
    <Container>
      <>
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
      </>
    </Container>
  );
});

export default Chat;
