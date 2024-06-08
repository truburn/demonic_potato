import { ButtonProps, useButtonStyles } from '@elements/Button';
import { cx } from "@emotion/css";

export function Button(props: ButtonProps) {
  const { className, children, id, onClick } = props;
  const classes = useButtonStyles();

  return (
    <button id={id} onClick={onClick} className={cx(classes.root, className)}>
      {children}
    </button>
  )
}