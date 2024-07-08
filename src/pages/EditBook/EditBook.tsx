import { BookForm } from "@components/BookForm";
import { Button, ButtonType } from "@elements/Button";
import { PageTitle } from "@elements/PageTitle";
import { BookProps } from "@pages/Book";
import { useEditBookStyles } from "@pages/EditBook";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  faFloppyDisk,
  faBan,
  faArrowRotateBack,
} from "@awesome.me/kit-3d36d6b3e3/icons/classic/light";

export function EditBook() {
  const navigate = useNavigate();
  const classes = useEditBookStyles();
  const rawBook = useLoaderData() as BookProps;
  const [title, setTitle] = useState<string>("");
  const [book, setBook] = useState<BookProps>(rawBook);
  const [chapters, setChapters] = useState<BookProps["chapters"]>([]);
  const [recipes, setRecipes] = useState<BookProps["recipes"]>([]);

  useEffect(() => {
    if (rawBook) {
      const { chapters: rawChapters, recipes: rawRecipes } = rawBook;
      setChapters(rawChapters);
      setRecipes(rawRecipes);
      setTitle("Edit Cookbook");
    } else {
      setTitle("Add Cookbook");
    }
  }, [rawBook]);

  const handleReset = () => {
    console.log("reset book", { book, chapters, recipes });
  };

  const handleSubmit = () => {
    console.log("submit book", { book, chapters, recipes });
  };

  return (
    <main className={classes.root}>
      <PageTitle>
        {title}
        <div className={classes.formActions}>
          <Button
            icon={faArrowRotateBack}
            buttonType={ButtonType.ICON}
            onClick={() => navigate(-1)}
            title="Cancel"
          />
          <Button
            icon={faBan}
            buttonType={ButtonType.ICON}
            onClick={handleReset}
            title="Reset Book"
          />
          <Button
            icon={faFloppyDisk}
            buttonType={ButtonType.ICON}
            onClick={handleSubmit}
            title="Save Book"
          />
        </div>
      </PageTitle>
      <BookForm book={book} onChange={(newValue) => setBook(newValue)} />
    </main>
  );
}
