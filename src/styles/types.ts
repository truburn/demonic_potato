export interface MessageColor {
  main: string;
  contrast: string;
}

export interface DemonicTheme {
  colors: {
    standard: string;
    contrast: string;
    primary: string;
    secondary: string;
  };
  messageColors: {
    info: MessageColor;
    success: MessageColor;
    warning: MessageColor;
    error: MessageColor;
  };
  font: {
    serif: string;
    sans: string;
    weight: {
      thin: number;
      extraLight: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    size: {
      small: number;
      medium: number;
      regular: number;
      large: number;
      xl: number;
      xxl: number;
    };
  };
}
