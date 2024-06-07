import { PageTitle } from "@components/PageTitle";
import { cx } from "@emotion/css";
import { Footer } from "@layout/Footer";
import { Header } from "@layout/Header";
import { useErrorPageStyles } from "@pages/ErrorPage";
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const classes = useErrorPageStyles();
  const error = useRouteError() as Error;

  return (
    <>
    <Header />
  <main className={classes.root}>
    <PageTitle>An Error has occurred</PageTitle>
    {error.stack?.split("\n").map((errLine, idx) => (
      <p key={idx} className={cx(classes.paragraph, {
        [classes.message]: idx === 0,
        [classes.stackLine]: idx > 0
      })}>
        {errLine}
      </p>
    ))}
  </main>
  <Footer />
  </>
  );
}
