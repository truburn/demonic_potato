import { BookProps, BookResponse } from "@pages/Book";
import { RecipeProps } from "@pages/Recipe";

export function reduceBookProps(book: BookResponse): BookProps {
  const chapters = book.chapters?.map((name) => {
    const recipes = book.recipes?.filter(({ chapter }) => chapter === name);
    return { name, recipes: sortRecipesByPage(recipes) };
  });

  const recipes = book.recipes?.filter(({ chapter }) => !chapter);

  return {
    ...book,
    chapters,
    recipes: sortRecipesByPage(recipes),
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

  return {
    ...book,
    chapters,
    recipes: sortRecipesByPage(recipes),
  } as BookResponse;
}

export function sortRecipesByPage(recipes: RecipeProps[] = []): RecipeProps[] {
  return recipes.sort((a, b) => {
    if (a.page > b.page) return 1;
    if (a.page < b.page) return -1;
    return 0;
  });
}
