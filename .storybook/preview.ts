import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/GlobalStyles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withRouter,
    withThemeFromJSXProvider({
      themes: {
        theme,
      },
      defaultTheme: "theme",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
