import { useHeaderStyles } from "@layout/Header";

export function Header() {
  const classes = useHeaderStyles();

  return <header className={classes.root}>Header</header>;
}
