import { useFormInputStyles, FormInputProps } from "@elements/FormInput";
import { generateUID } from "@utils/generateUID";

export function FormInput(_props: FormInputProps) {
  const { className, id } = _props;
  const classes = useFormInputStyles();

  return <div className={classes.root}>Form Input</div>;
}
