import {
  InputComponentProps,
  TextInput,
  useFormInputStyles,
} from "@elements/FormInput";
import { cx } from "@emotion/css";
import { ChangeEvent } from "react";

export function Input(props: TextInput & InputComponentProps) {
  const { onChange, className } = props;
  const classes = useFormInputStyles();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      className={cx(classes.input, className)}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={handleOnChange}
    />
  );
}
