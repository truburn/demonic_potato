import { useErrorPageStyles } from "@pages/ErrorPage";

export function ErrorPage() {
  const classes = useErrorPageStyles();

  return <div className={classes.root}>Error Page</div>;
}
