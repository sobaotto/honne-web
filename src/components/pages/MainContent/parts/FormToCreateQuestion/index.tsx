import React from "react";
import { FormContainer } from "./styled";
import { useForm } from "react-hook-form";
import { FormData, FormToCreateQuestionProps } from "./types";

const FormToCreateQuestion = React.memo(
  ({
    setIsPosted,
    setSelectedQuestionIndex,
    setIsCreatingQuestion,
  }: FormToCreateQuestionProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();

    const onSubmit = handleSubmit(async (formData) => {
      await fetch("http://localhost:3001/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1, // TODO:ログインできるようにしたら、ここは`currentUser.id`にする
          ...formData,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsPosted(true);
          setSelectedQuestionIndex(0);
          setIsCreatingQuestion(false);
        });
    });

    return (
      <FormContainer>
        <div>新規質問</div>
        <form onSubmit={onSubmit}>
          <br />
          <label>タイトル</label>
          <br />
          <input {...register("title")} />
          <br />
          <label>内容</label>
          <br />
          <textarea {...register("text")} />
          <br />
          <label>
            公開
            <input {...register("is_public")} type="radio" value="true" />
          </label>
          <br />
          <label>
            非公開
            <input {...register("is_public")} type="radio" value="false" />
          </label>
          <br />
          <button type="submit">投稿</button>
        </form>
      </FormContainer>
    );
  }
);

export default FormToCreateQuestion;
