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
  const [isPosted, setIsPosted] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetch(`http://localhost:3001/questions?name=${currentUser.name}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestionItems(data.questions);
        setIsLoading(false);
        // TODO:違う方法で新規投稿したデータを取得する。
        // （isPostedで管理すると2回リクエストが送られるので、直さないといけない。）
        setIsPosted(false);
      });
  }, [isPosted, showingPagePath]);

  return {
    questionItems,
    isLoading,
    setQuestionItems,
    isPosted,
    setIsPosted,
  };
};
