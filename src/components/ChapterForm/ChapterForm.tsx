import { ChapterFormProps, useChapterFormStyles } from '@components/ChapterForm';
import { useEffect } from "react";

export function ChapterForm(props: ChapterFormProps) {
  const classes = useChapterFormStyles();

  useEffect(() => {
    console.log('ChapterForm', props);
  }, [props]);

  return <div className={classes.root}>Chapter Form Component</div>
}