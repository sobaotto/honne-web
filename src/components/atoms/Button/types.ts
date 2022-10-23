import { MouseEventHandler } from "react";

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type BaseButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
