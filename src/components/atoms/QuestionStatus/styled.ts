import styled, { css } from "styled-components";
import { px2rem } from "~/styles/utils";
import { BaseQuestionStatusProps } from "./types";

export const BaseQuestionStatus = styled.div<BaseQuestionStatusProps>`
  ${({ statusColor, statusBackgroundColor }) =>
    css`
      background-color: ${statusBackgroundColor};
      color: ${statusColor};
    `}
  font-family: 'TT Norms';
  font-size: ${px2rem(14)};
  padding: 0 10px;
  border-radius: 20px;
  margin-top: ${px2rem(2)};
`;
