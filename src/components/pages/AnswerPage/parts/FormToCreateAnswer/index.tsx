import React from "react";
import { FormContainer } from "./styled";
import { useForm } from "react-hook-form";
import { FormData, FormToCreateAnswerProps } from "./types";

const FormToCreateAnswer = React.memo(
  ({
    askedQuestionItem,
    fetchAnswers,
    setSelectedQuestionIndex,
  }: FormToCreateAnswerProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();

    const onSubmit = handleSubmit(async (formData) => {
      await fetch("http://localhost:3001/answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 2, // TODO:ログインできるようにしたら、ここは`currentUser.id`にする
          question_id: askedQuestionItem.question.id,
          ...formData,
        }),
        mode: "cors",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setSelectedQuestionIndex(0);

          fetchAnswers();
        });
    });

    return (
      <FormContainer>
        <br />
        <div>
          <u>回答</u>
        </div>
        <form onSubmit={onSubmit}>
          <br />
          <label>内容</label>
          <br />
          <textarea {...register("text")} />
          <br />
          <br />
          <button type="submit">回答</button>
        </form>
      </FormContainer>
    );
  }
);

export default FormToCreateAnswer;
