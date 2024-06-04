import { useRecipeStyles } from "@pages/Recipe";

export function Recipe() {
  const classes = useRecipeStyles();

  return <div className={classes.root}>Recipe Page</div>;
}
