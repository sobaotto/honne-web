import React from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "~/hooks/useSignUp";
import { FormContainer } from "./style";
import { FormData, SignUpPageProps } from "./types";

const SignUpPage = React.memo(({ setCurrentUser }: SignUpPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { isLoading, onSubmit } = useSignUp({
    setCurrentUser,
    handleSubmit
  });

  return (
    <FormContainer>
      <br />
      <div>
        <u>会員登録</u>
      </div>
      <form onSubmit={onSubmit}>
        <label>ユーザーネーム</label>
        <br />
        <input {...register("name")} />
        <br />
        <label>メールアドレス</label>
        <br />
        <input {...register("email")} type={"email"} />
        <br />
        <label>パスワード</label>
        <br />
        <input {...register("password")} />
        <br />
        <label>パスワード確認</label>
        <br />
        <input {...register("password_confirmation")} />
        <br />
        <button type="submit">登録</button>
      </form>
    </FormContainer>
  );
});

export default SignUpPage;
