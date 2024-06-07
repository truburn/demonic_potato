import { usePageTitleStyles } from "@components/PageTitle";
import { cx } from "@emotion/css";
import { ReactNode } from "react";

export interface PageTitleProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function PageTitle(props: PageTitleProps) {
  const { children, className, ...rest} = props;
  const classes = usePageTitleStyles();

  return (
    <h1
      {...rest}
      className={cx(classes.root, className)}
    >
      {children}
    </h1>
  )
}