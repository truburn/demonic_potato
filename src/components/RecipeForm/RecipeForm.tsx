import { RecipeFormProps, useRecipeFormStyles } from "@components/RecipeForm";
import { useEffect } from "react";

export function RecipeForm(props: RecipeFormProps) {
  const classes = useRecipeFormStyles();

  useEffect(() => {
    console.log("RecipeForm", props);
  }, [props]);

  return <div className={classes.root}>Recipe Form Component</div>;
}
