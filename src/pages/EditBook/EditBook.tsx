import { useEditBookStyles } from "@pages/EditBook";

export function EditBook() {
  const classes = useEditBookStyles();

  return <div className={classes.root}>Add Book Form</div>;
}
