import React from "react";
import { Question } from "~/types";

export const useQuestion = () => {
  const [questions, setQuestions] = React.useState<Array<Question>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isPosted, setIsPosted] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetch(`http://localhost:3001/questions?name=taro`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setIsLoading(false);
        // TODO:違う方法で新規投稿したデータを取得する。
        // （isPostedで管理すると2回リクエストが送られるので、直さないといけない。）
        setIsPosted(false);
      });
  }, [isPosted]);

  return {
    questions,
    isLoading,
    setQuestions,
    isPosted,
    setIsPosted,
  };
};
