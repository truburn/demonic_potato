import { ReactNode } from "react";

export type FormInputProps = {
  className?: string;
  id?: string;
  errors?: ReactNode[];
  helperText?: ReactNode;
  description?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  tooltip?: ReactNode;
  name: string;
} & (
  | {
      legend: ReactNode;
      label?: ReactNode;
    }
  | {
      legend?: ReactNode;
      label: ReactNode;
    }
) &
  (
    | {
        asFieldSet?: true;
        collapsible?: boolean;
      }
    | {
        asFieldSet?: false;
        collapsible?: never;
      }
  ) &
  InputProps;

export type InputProps =
  | TextInput
  | LoginInput
  | NumberInput
  | CheckboxInput
  | CheckboxGroup
  | SelectInput;

export interface TextInput {
  type: "text";
  format: "text";
  maxLength?: number;
  multiline?: boolean;
  placeholder?: string;
  pattern?: string;
  defaultValue?: string;
  value?: string;
  onChange: (name: string, value?: string) => void;
}

export interface LoginInput {
  type: "login";
  format: "email" | "password";
  maxLength?: number;
  value?: string;
  onChange: (name: string, value?: string) => void;
}

export interface NumberInput {
  type: "number";
  min?: number;
  max?: number;
  increment?: number;
  float?: boolean;
  defaultValue?: number;
  value?: number;
  onChange: (name: string, value?: number) => void;
}

export interface CheckboxInput {
  type: "checkbox";
  defaultValue?: boolean;
  onChange: (name: string, value?: boolean) => void;
  asSwitch?: boolean;
}

export interface CheckboxGroupOption {
  label: ReactNode;
  description?: ReactNode;
  asSwitch?: boolean;
}

export interface CheckboxGroup {
  type: "checkbox-group";
  options: CheckboxGroupOption[];
  defaultValue?: Record<string, boolean>;
  value?: Record<string, boolean>;
  onChange: (name: string, value?: Record<string, boolean>) => void;
  multiple?: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
  data?: any;
}

type SingleSelect = {
  multiple?: false;
  value?: SelectOption;
  onChange: (name: string, value?: SelectOption) => void;
} & (
  | {
      nullable?: false;
      defaultValue?: SelectOption;
    }
  | {
      nullable?: true;
      defaultValue: SelectOption;
    }
);

type MultiSelect = {
  multiple?: true;
  value?: SelectOption[];
  onChange: (name: string, value?: SelectOption[]) => void;
} & (
  | {
      nullable?: false;
      defaultValue?: SelectOption[];
    }
  | {
      nullable?: true;
      defaultValue: SelectOption[];
    }
);

export type SelectInput = {
  type: "select";
  options: SelectOption[];
} & (SingleSelect | MultiSelect);
