import React from "react";
import { useTranslation } from "react-i18next";
import { useAnswer } from "~/hooks/useAnswer";
import AnswerItem from "./parts/AnswerItem";
import FormToCreateAnswer from "./parts/FormToCreateAnswer";
import {
  Container,
  AnswersContainer,
  AnswerDetail,
  HeaderContainer,
  Title,
  AnswerItemsWrapper,
} from "./styled";
import { AnswerPageProps } from "./types";

const AnswerPage = React.memo(({ showingPagePath }: AnswerPageProps) => {
  const [t] = useTranslation();
  const { askedQuestionItems, isLoading, setIsPosted } = useAnswer({
    showingPagePath,
  });
  const [selectedQuestionIndex, setSelectedQuestionIndex] = React.useState<
    number | null
  >(null);

  return (
    <Container>
      <AnswersContainer>
        <HeaderContainer>
          <Title>Answer</Title>
        </HeaderContainer>
        <AnswerItemsWrapper>
          {askedQuestionItems &&
            askedQuestionItems.map((askedQuestionItem, index) => {
              return (
                <AnswerItem
                  isSelected={index === selectedQuestionIndex}
                  askedQuestionItem={askedQuestionItem}
                  onClick={() => {
                    index === selectedQuestionIndex
                      ? setSelectedQuestionIndex(null)
                      : setSelectedQuestionIndex(index);
                  }}
                />
              );
            })}
        </AnswerItemsWrapper>
      </AnswersContainer>
      {
        <AnswerDetail>
          {selectedQuestionIndex !== null && askedQuestionItems && (
            <>
              <br />
              <div>
                <u>タイトル</u>
              </div>
              {/* 疑問：askedQuestionItems[selectedQuestionIndex]は、useStateで保持した方がいいのか？ */}
              <div>
                {askedQuestionItems[selectedQuestionIndex].question.title}
              </div>
              <br />
              <div>
                <u>質問内容</u>
              </div>
              <div>
                {askedQuestionItems[selectedQuestionIndex].question.text}
              </div>
              {askedQuestionItems[selectedQuestionIndex].answer ? (
                <>
                  <br />
                  <hr />
                  <br />
                  <div>
                    <u>回答内容</u>
                  </div>
                  <div>
                    {askedQuestionItems[selectedQuestionIndex].answer?.text}
                  </div>
                </>
              ) : (
                <FormToCreateAnswer
                  askedQuestionItem={askedQuestionItems[selectedQuestionIndex]}
                  setIsPosted={setIsPosted}
                  setSelectedQuestionIndex={setSelectedQuestionIndex}
                />
              )}
            </>
          )}
        </AnswerDetail>
      }
    </Container>
  );
});

export default AnswerPage;
