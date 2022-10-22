import styled from "styled-components";
import { px2rem } from "~/styles/utils";

export const Container = styled.div`
  width: ${px2rem(290)};
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1 solid;

  background: #ffffff;
  box-shadow: 14.0351px 0px 25px rgba(86, 128, 248, 0.03),
    35.0877px 0px 70px rgba(86, 128, 248, 0.05),
    23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02);
`;
