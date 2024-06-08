import { BookProps, BookResponse } from "@pages/Book";
import { RecipeProps } from "@pages/Recipe";

export function reduceBookProps(book: BookResponse): BookProps {
  const chapters = book.chapters?.map((name) => ({
    name,
    recipes: book.recipes?.filter(({ chapter }) => chapter === name),
  }));

  const recipes = book.recipes?.filter(({ chapter }) => !chapter);

  return {
    ...book,
    chapters,
    recipes,
  } as BookProps;
}

export function reduceBookResponse(book: BookProps): BookResponse {
  const recipes: RecipeProps[] = book.recipes ?? [];
  const chapters = book.chapters?.map((chapter) => {
    if (chapter.recipes) {
      recipes.push(...chapter.recipes);
    }
    return chapter.name;
  });

  recipes.sort((a, b) => {
    if (a.recipeID > b.recipeID) return 1;
    if (a.recipeID < b.recipeID) return -1;
    return 0;
  });

  return {
    ...book,
    chapters,
    recipes,
  } as BookResponse;
}
