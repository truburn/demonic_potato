import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { ColorVariant } from "@styles/types";
import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: FontAwesomeIconProps["icon"];
  iconProps?: Omit<FontAwesomeIconProps, "icon">;
  iconPosition?: "start" | "end";
  buttonType?: ButtonType;
  variant?: ButtonVariant;
  color?: ColorVariant;
  disabled?: boolean;
}

export enum ButtonType {
  SQUARE = "square",
  ROUND = "round",
  ICON = "icon",
}

export enum ButtonVariant {
  FILLED = "filled",
  OUTLINED = "outlined",
  TRANSPARENT = "transparent",
}
