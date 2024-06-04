import { useIconStyles, IconProps } from "@components/Icon";
import { cx } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Icon(props: IconProps) {
  const { id, className, ...iconProps } = props;
  const classes = useIconStyles();

  return (
      <FontAwesomeIcon 
        {...iconProps}
        id={id}
        className={cx(classes.root, className)}
      />
  )
}