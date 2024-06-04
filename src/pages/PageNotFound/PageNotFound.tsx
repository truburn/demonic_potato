import { usePageNotFoundStyles } from "@pages/PageNotFound";

export function PageNotFound() {
  const classes = usePageNotFoundStyles();

  return <div className={classes.root}>Page Not Found</div>;
}
