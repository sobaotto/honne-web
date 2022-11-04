import styled, { css } from "styled-components";
import { px2rem } from "~/styles/utils";
import { LinkProps } from "./types";

export const Link = styled.a<LinkProps>`
  ${({ navItemPath, showingPagePath }) =>
    showingPagePath === navItemPath
      ? css`
          color: #2a8bf2;
        `
      : css`
          color: #707c97;
        `}
  width: ${px2rem(290)};
  height: ${px2rem(57)};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "TT Norms";
  font-size: ${px2rem(16)};
  line-height: ${px2rem(19)};
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: #2a8bf2;
  }
`;

export const NavIconWrapper = styled.div`
  margin: ${px2rem(3.5)} 0 0 ${px2rem(38)};
`;

export const NavTitle = styled.div`
  flex: 1;
  margin-left: ${px2rem(17)};
`;

export const SelectedBar = styled.div`
  width: ${px2rem(3)};
  height: ${px2rem(40)};
  background: #2a8bf2;
  box-shadow: 1px 0px 10px rgba(42, 139, 242, 0.45),
    0px 0px 10px rgba(42, 139, 242, 0.55), 4px 0px 25px rgba(42, 139, 242, 0.75);
  border-radius: ${px2rem(3)};
  position: absolute;
`;
