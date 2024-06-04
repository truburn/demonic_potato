import { useFooterStyles } from "@layout/Footer";

export function Footer() {
  const classes = useFooterStyles();

  return <footer className={classes.root}>Footer</footer>;
}
