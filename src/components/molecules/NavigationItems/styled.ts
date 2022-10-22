import styled, { css } from "styled-components";
import { px2rem } from "~/styles/utils";

export const Container = styled.div`
  width: ${px2rem(290)};
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: ${px2rem(40)};
`;

export const ItemWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
