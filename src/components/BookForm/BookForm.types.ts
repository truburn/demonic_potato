import { SimpleBookProps } from "@pages/Book";
import { Dispatch, SetStateAction } from "react";

export interface BookFormProps {
  book: SimpleBookProps | null;
  onChange: Dispatch<SetStateAction<SimpleBookProps | null>>;
  id?: string;
  className?: string;
}
