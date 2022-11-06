import React from "react";
import { askedQuestionItem } from "~/types";
import { useAnswerProps } from "./types";

export const useAnswer = ({ showingPagePath }: useAnswerProps) => {
  const [askedQuestionItems, setAskedQuestionItems] = React.useState<
    Array<askedQuestionItem>
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isPosted, setIsPosted] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetch(`http://localhost:3001/answers`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAskedQuestionItems(data.asked_questions);
        setIsLoading(false);
        // TODO:違う方法で新規投稿したデータを取得する。
        // （isPostedで管理すると2回リクエストが送られるので、直さないといけない。）
        setIsPosted(false);
      });
  }, [isPosted, showingPagePath]);

  return {
    askedQuestionItems,
    isLoading,
    setAskedQuestionItems,
    isPosted,
    setIsPosted,
  };
};
