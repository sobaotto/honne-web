import styled from "styled-components";
import { px2rem } from "~/styles/utils";

export const Container = styled.div`
  width: ${px2rem(290)};
  height: ${px2rem(290)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.img`
  margin-top: ${px2rem(92)};
  margin-bottom: ${px2rem(15)};
  height: ${px2rem(86)};
  width: ${px2rem(86)};
`;

export const Username = styled.div`
  font-family: "TT Norms";
  font-size: ${px2rem(18)};
  line-height: ${px2rem(21)};
  color: #0d1c2e;
`;
