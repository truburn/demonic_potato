import { useFormInputStyles, FormInputProps } from "@elements/FormInput";
import { cx } from "@emotion/css";
import { generateUID } from "@utils/generateUID";
import { ElementType } from "react";

export function FormInput(_props: FormInputProps) {
  const {
    className,
    labelClassName,
    inputClassName,
    id: idFromProps,
    label,
    hideLabel = false,
    input,
    name,
  } = _props;
  const classes = useFormInputStyles();
  const id = idFromProps ?? generateUID({ prefix: input.type, suffix: name });

  return (
    <div className={cx(classes.root, className)}>
      {!hideLabel && (
        <label htmlFor={id} className={cx(classes.label, labelClassName)}>
          {label}
        </label>
      )}
    </div>
  );
}
