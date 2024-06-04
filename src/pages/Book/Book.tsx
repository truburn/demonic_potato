import { useBookStyles } from "@pages/Book";

export function Book() {
  const classes = useBookStyles();

  return <div className={classes.root}>Book Page</div>;
}
