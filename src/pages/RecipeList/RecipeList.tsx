import { useRecipeListStyles } from "@pages/RecipeList";

export function RecipeList() {
  const classes = useRecipeListStyles();

  return <div className={classes.root}>Recipe List</div>;
}
