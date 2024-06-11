export interface MessageColor {
  main: string;
  contrast: string;
}

export enum ColorVariant {
  STANDARD = "standard",
  CONTRAST = "contrast",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface DemonicTheme {
  colors: Record<ColorVariant, string>;
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
  widths: {
    paddedContent: number;
  };
}
