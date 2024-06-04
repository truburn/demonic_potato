import { useEditRecipeStyles } from "@pages/EditRecipe";

export function EditRecipe() {
  const classes = useEditRecipeStyles();

  return <div className={classes.root}>Add Recipe Form</div>;
}
