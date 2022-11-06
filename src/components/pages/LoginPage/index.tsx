import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "~/hooks/useLogin";
import { FormContainer } from "./style";
import { FormData, LoginPageProps } from "./types";

const LoginPage = React.memo(({ setCurrentUser }: LoginPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { isLoading, onSubmit } = useLogin({
    setCurrentUser,
    handleSubmit,
    reset,
  });

  return (
    <FormContainer>
      <br />
      <div>
        <u>ログイン</u>
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
        <input {...register("password")} type={"password"} />
        <br />
        <button type="submit">ログイン</button>
      </form>
    </FormContainer>
  );
});

export default LoginPage;
