import { useHeaderStyles } from "@layout/Header";
import Logo from "@assets/logo.svg?react";
import { Navigation } from "@layout/Navigation";
import { Link } from "react-router-dom";

export function Header() {
  const classes = useHeaderStyles();

  return (
    <header className={classes.root}>
      <Link
        to="/library"
        className={classes.logoLink}
        title="Return to library"
      >
        <Logo className={classes.logo} />
      </Link>
      <Navigation />
    </header>
  );
}
