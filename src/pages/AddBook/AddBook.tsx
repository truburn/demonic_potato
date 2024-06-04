import { useAddBookStyles } from "@pages/AddBook";

export function AddBook() {
  const classes = useAddBookStyles();

  return <div className={classes.root}>Add Book Form</div>;
}
