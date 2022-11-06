import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { px2rem } from "~/styles/utils";
import { AnswerItemContainerProps } from "./types";

export const AnswerItemContainer = styled.div<AnswerItemContainerProps>`
  ${({ isSelected }) =>
    isSelected
      ? css`
          border: 1px solid rgba(112, 124, 151, 0.5);
        `
      : null}
  height: ${px2rem(220)};
  padding: ${px2rem(30)} ${px2rem(40)} ${px2rem(40)} ${px2rem(40)};
  margin-bottom: ${px2rem(20)};

  background: #ffffff;
  border-radius: ${px2rem(6)};
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const UserImg = styled.img`
  height: ${px2rem(54)};
  width: ${px2rem(54)};
  border-radius: 50%;
  border: 0.01px solid;
`;

export const QuestionerName = styled.div`
  font-family: "TT Norms";
  font-size: ${px2rem(18)};
  margin-left: ${px2rem(12)};
  color: #0d1c2e;
  margin-top: auto;
  margin-bottom: auto;
`;

export const LeftSideWrapper = styled.div`
  display: flex;
`;

export const Text = styled.div`
  font-family: "TT Norms";
  font-size: ${px2rem(16)};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: ${px2rem(4)};
  color: #707c97;
`;

export const AnswerDetailContainer = styled.div`
  margin-top: ${px2rem(17)};
  flex: 1;
`;

export const Title = styled.div`
  font-size: ${px2rem(18)};
`;

export const UpSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightSideWrapper = styled.div``;
