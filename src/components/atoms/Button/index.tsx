import React from "react";
import { BaseButton, Container } from "./styled";
import { ButtonProps } from "./types";

export const Button = React.memo(
  ({ onClick, className, children }: ButtonProps) => {
    return (
      <Container className={className}>
        <BaseButton className={className} onClick={onClick}>
          {children}
        </BaseButton>
      </Container>
    );
  }
);
