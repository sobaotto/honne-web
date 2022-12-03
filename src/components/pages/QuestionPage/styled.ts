import styled from "styled-components";
import { Button } from "~/components/atoms/Button";
import { px2rem } from "~/styles/utils";
import { ButtonToCreateNewQuestionProps } from "./types";

export const Container = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
  display: flex;
`;

export const QuestionsContainer = styled.div`
  margin-left: ${px2rem(59)};
  margin-top: ${px2rem(109)};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: "TT Norms";
  font-size: ${px2rem(36)};

  color: #0d1c2e;
`;

export const ButtonToCreateNewQuestion = styled(
  Button
)<ButtonToCreateNewQuestionProps>``;
