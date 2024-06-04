import { useAddRecipeStyles } from "@pages/AddRecipe";

export function AddRecipe() {
  const classes = useAddRecipeStyles();

  return <div className={classes.root}>Add Recipe Form</div>;
}
