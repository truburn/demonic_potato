import { DemonicTheme } from "@styles/types";

const theme: DemonicTheme = {
  colors: {
    standard: "#5A0B0B",
    primary: "#CF0A0A",
    secondary: "#E85A0B",
    contrast: "#F7EFE9",
  },
  messageColors: {
    info: {
      main: "#00C2FF",
      contrast: "#CEECF6",
    },
    success: {
      main: "#00B448",
      contrast: "#B8F1CF",
    },
    warning: {
      main: "#FEB700",
      contrast: "#FEE9B3",
    },
    error: {
      main: "#E10000",
      contrast: "#F3D2D2",
    },
  },
  font: {
    serif: `"Josefin Slab", serif`,
    sans: `"Josefin Sans", sans-serif`,
    weight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    size: {
      small: 12,
      medium: 14,
      regular: 16,
      large: 18,
      xl: 24,
      xxl: 32,
    },
  },
};

export default theme;
