import GlobalStyles from "@styles/GlobalStyles";
import theme from "@styles/theme";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import routes from "@pages/routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
