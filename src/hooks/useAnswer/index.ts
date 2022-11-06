import React from "react";
import { askedQuestionItem } from "~/types";
import { useAnswerProps } from "./types";

export const useAnswer = ({ showingPagePath }: useAnswerProps) => {
  const [askedQuestionItems, setAskedQuestionItems] = React.useState<
    Array<askedQuestionItem>
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetchAnswers = React.useCallback(() => {
    fetch(`http://localhost:3001/answers`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAskedQuestionItems(data.asked_questions);
        setIsLoading(false);
      });
  }, [setAskedQuestionItems, setIsLoading]);

  React.useEffect(() => {
    fetchAnswers();
  }, [showingPagePath]);

  return {
    askedQuestionItems,
    isLoading,
    setAskedQuestionItems,
    fetchAnswers,
  };
};
