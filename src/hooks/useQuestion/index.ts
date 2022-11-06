import React from "react";
import { QuestionItem } from "~/types";
import { useQuestionProps } from "./types";

export const useQuestion = ({
  showingPagePath,
  currentUser,
}: useQuestionProps) => {
  const [questionItems, setQuestionItems] = React.useState<Array<QuestionItem>>(
    []
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetchQuestions = React.useCallback(() => {
    fetch(`http://localhost:3001/questions?name=${currentUser.name}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestionItems(data.questions);
        setIsLoading(false);
      });
  }, [setQuestionItems, setIsLoading]);

  React.useEffect(() => {
    fetchQuestions();
  }, [showingPagePath]);

  return {
    questionItems,
    isLoading,
    setQuestionItems,
    fetchQuestions,
  };
};
