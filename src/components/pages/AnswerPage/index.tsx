import React from "react";
import { useTranslation } from "react-i18next";
import AnswerItems from "~/components/molecules/AnswerItems";
import { useAnswer } from "~/hooks/useAnswer";
import FormToCreateAnswer from "./parts/FormToCreateAnswer";
import {
  Container,
  AnswersContainer,
  AnswerDetail,
  HeaderContainer,
  Title,
} from "./styled";
import { AnswerPageProps } from "./types";

const AnswerPage = React.memo(({ showingPagePath }: AnswerPageProps) => {
  const [t] = useTranslation();
  const { askedQuestionItems, isLoading, fetchAnswers } = useAnswer({
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
        <AnswerItems
          askedQuestionItems={askedQuestionItems}
          selectedQuestionIndex={selectedQuestionIndex}
          setSelectedQuestionIndex={setSelectedQuestionIndex}
        />
      </AnswersContainer>
      {
        <AnswerDetail>
          {selectedQuestionIndex !== null && askedQuestionItems.length && (
            <>
              <br />
              <div>
                <u>タイトル</u>
              </div>
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
                  fetchAnswers={fetchAnswers}
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
