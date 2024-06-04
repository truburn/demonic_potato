import GlobalStyles from "@styles/GlobalStyles";
import theme from "@styles/theme";
import { ThemeProvider } from "@emotion/react";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
        </ThemeProvider>
    );
}
