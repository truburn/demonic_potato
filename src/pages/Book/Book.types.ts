import { RecipeProps } from "@pages/Recipe";

export interface BookProps {
  bookID: string;
  name: string;
  author: string;
  description?: string;
  cuisines?: string[];
  categories?: string[];
  chapters?: ChapterProps[];
  recipes?: RecipeProps[];
  isFavorite?: boolean;
}

export interface ChapterProps {
  name: string;
  recipes?: RecipeProps[];
}

export interface BookResponse extends Omit<BookProps, "chapters"> {
  chapters?: string[];
}
