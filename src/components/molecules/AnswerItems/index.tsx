import React from "react";
import AnswerItem from "./AnswerItem";
import { AnswerItemsWrapper } from "./styled";
import { QuestionItemsProps } from "./types";

const AnswerItems = React.memo(
  ({
    askedQuestionItems,
    selectedQuestionIndex,
    setSelectedQuestionIndex,
  }: QuestionItemsProps) => {
    return (
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
    );
  }
);

export default AnswerItems;
