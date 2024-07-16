import { ReactNode } from "react";

export interface FormInputProps {
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  id?: string;
  errors?: ReactNode[];
  helperText?: ReactNode;
  description?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  tooltip?: ReactNode;
  label: string;
  hideLabel?: boolean;
  name: string;
  onChange?: (name: string, value?: any) => void;
  value?: any;
  defaultValue?: any;
  input: InputProps;
}

export type InputProps =
  | TextInput
  | LoginInput
  | NumberInput
  | CheckboxInput
  | CheckboxGroup
  | SelectInput;

export interface InputComponentProps {
  name: string;
  id: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

export interface TextInput {
  type: "text";
  maxLength?: number;
  multiline?: boolean;
  placeholder?: string;
  pattern?: string;
  showMaxLength?: boolean;
}

export interface LoginInput {
  type: "login";
  format: "email" | "password";
  maxLength?: number;
}

export interface NumberInput {
  type: "number";
  min?: number;
  max?: number;
  increment?: number;
  float?: boolean;
  isRange?: boolean;
}

export interface CheckboxInput {
  type: "checkbox";
  asSwitch?: boolean;
}

export interface CheckboxGroupOption {
  label: ReactNode;
  description?: ReactNode;
}

export interface CheckboxGroup {
  type: "checkbox-group";
  options: CheckboxGroupOption[];
  multiple?: boolean;
  asSwitch?: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
  data?: any;
}

export interface SelectInput {
  type: "select";
  options: SelectOption[];
  multiple?: boolean;
  nullable?: boolean;
}
