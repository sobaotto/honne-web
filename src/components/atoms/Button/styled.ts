import styled from "styled-components";
import { px2rem } from "~/styles/utils";
import { BaseButtonProps } from "./types";

export const BaseButton = styled.button<BaseButtonProps>`
  width: ${px2rem(240)};
  height: ${px2rem(60)};

  background: linear-gradient(92.68deg, #7cb8f7 0%, #2a8bf2 100%);
  box-shadow: 6px 6px 25px rgba(42, 139, 242, 0.15),
    4px 4px 25px rgba(42, 139, 242, 0.05),
    10px 6px 25px rgba(42, 139, 242, 0.15);
  border-radius: ${px2rem(6)};

  border: none;
  cursor: pointer;

  font-family: "TT Norms";
  font-size: ${px2rem(20)};
  line-height: ${px2rem(24)};

  color: #ffffff;

  position: absolute;

  &:active {
    margin-top: ${px2rem(1)};
    margin-left: ${px2rem(0.5)};
  }
`;

export const Container = styled.div`
  width: ${px2rem(240)};
  height: ${px2rem(60)};
`;
