import { BookResponse } from "@pages/Book";

export interface RecipeProps {
  recipeID: string;
  name: string;
  description?: string;
  bookID: string;
  book: BookResponse;
  chapter?: string;
  page: number;
  pageEnd?: number;
  cuisines?: string[];
  categories?: string[];
  ingredients?: string[];
  isFavorite?: boolean;
  notes?: Record<string, string>;
}
