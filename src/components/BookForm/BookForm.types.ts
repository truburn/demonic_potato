import { BookProps } from "@pages/Book";
import { generateUID } from "@utils/generateUID";

export interface BookFormProps {
  book: BookProps | null;
  onChange: (newValue: BookProps) => void;
  id?: string;
  className?: string;
}

export const INITIAL_BOOK_FORM_VALUES: BookProps = {
  bookID: generateUID({ prefix: "book" }),
  name: "",
  author: "",
  description: "",
  cuisines: [],
  categories: [],
  chapters: [],
  recipes: [],
};
