import { Footer } from "@layout/Footer";
import { Header } from "@layout/Header";
import { usePageStyles } from "@layout/Page";
import { Outlet } from "react-router-dom";

export function Page() {
  const classes = usePageStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
