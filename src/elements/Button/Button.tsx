import {
  ButtonProps,
  useButtonStyles,
  ButtonType,
  ButtonVariant,
} from "@elements/Button";
import { Icon } from "@elements/Icon";
import { cx } from "@emotion/css";

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    id,
    onClick,
    icon,
    buttonType = ButtonType.SQUARE,
    iconProps = {},
    color,
    disabled,
  } = props;
  const classes = useButtonStyles(color);
  const variant =
    buttonType === ButtonType.ICON && !props.variant
      ? ButtonVariant.TRANSPARENT
      : props.variant ?? ButtonVariant.FILLED;

  return (
    <button
      id={id}
      onClick={onClick}
      className={cx(
        classes.root,
        classes[buttonType],
        classes[variant],
        className,
      )}
      disabled={disabled}
    >
      {buttonType === ButtonType.ICON && icon ? (
        <Icon icon={icon} {...iconProps} />
      ) : (
        children
      )}
    </button>
  );
}
