import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
