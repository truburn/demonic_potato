import { useLibraryStyles } from "@pages/Library";

export function Library() {
  const classes = useLibraryStyles();

  return <div className={classes.root}>Library</div>;
}
