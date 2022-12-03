import React from "react";
import QuestionItem from "./QuestionItem";
import { QuestionItemsWrapper } from "./styled";
import { QuestionItemsProps } from "./types";

const QuestionItems = React.memo(
  ({
    questionItems,
    selectedQuestionIndex,
    setSelectedQuestionIndex,
    setIsCreatingQuestion,
  }: QuestionItemsProps) => {
    return (
      <QuestionItemsWrapper>
        {questionItems &&
          questionItems.map((questionItem, index) => {
            return (
              <QuestionItem
                isSelected={index === selectedQuestionIndex}
                questionItem={questionItem}
                onClick={() => {
                  setSelectedQuestionIndex(index);
                  setIsCreatingQuestion(false);
                }}
              />
            );
          })}
      </QuestionItemsWrapper>
    );
  }
);

export default QuestionItems;
