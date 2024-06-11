import { BookFormProps, useBookFormStyles } from "@components/BookForm";
import { useEffect } from "react";

export function BookForm(props: BookFormProps) {
  const classes = useBookFormStyles();

  useEffect(() => {
    console.log("BookForm", props);
  }, [props]);

  return <div className={classes.root}>Book Form Component</div>;
}
