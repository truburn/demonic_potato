import { useNavigationStyles } from "@layout/Navigation";

export function Navigation() {
  const classes = useNavigationStyles();

  return <nav className={classes.root}>Navigation</nav>;
}
