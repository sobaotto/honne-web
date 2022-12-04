import styled from "styled-components";
import { px2rem } from "~/styles/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
`;

export const ChatContainer = styled.div`
  background: #FFFFFF;
  flex: 1;
`

export const HeaderContainer = styled.div`
  display: flex;
  height: ${px2rem(110)};
  align-items: center;
  background: #FAFBFF;
  border-radius: ${px2rem(6)} ${px2rem(6)} 0px 0px;
  border-bottom: ${px2rem(2)} solid rgba(112, 124, 151, 0.1);
`;

export const RespondentImg = styled.img`
  margin-left: ${px2rem(60)};
  height: ${px2rem(54)};
  width: ${px2rem(54)};
  border-radius: 50%;
  border: 0.01px solid;
`;

export const RespondentName = styled.div`
  margin-left: ${px2rem(10)};
  font-family: "TT Norms";
  font-size: ${px2rem(18)};
  line-height: ${px2rem(21)};
  color: #0d1c2e;
`;
