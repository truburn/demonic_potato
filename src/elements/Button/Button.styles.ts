import { ButtonType, ButtonVariant } from "@elements/Button/Button.types";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { ColorVariant } from "@styles/types";
import { darken, lighten } from "color2k";

export function useButtonStyles(color: ColorVariant = ColorVariant.STANDARD) {
  const theme = useTheme();
  const mainIsLight = color === ColorVariant.CONTRAST;
  const mainColor = theme.colors[color];
  const contrastColor =
    theme.colors[mainIsLight ? ColorVariant.STANDARD : ColorVariant.CONTRAST];
  const mainLighten = lighten(mainColor, 0.15);
  const mainDarken = darken(mainColor, 0.15);

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 1,
    cursor: "pointer",
    transition: "ease all 0.5s",
    padding: "0.25em 0.5em",
    paddingTop: 6,
    fontFamily: theme.font.sans,
    lineHeight: 1.15,
    fontSize: theme.font.size.regular,
    "&&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  });

  const filledVariant = css({
    background: mainColor,
    color: contrastColor,
    borderColor: mainColor,
    "&:not(:disabled):hover": {
      background: mainIsLight ? mainDarken : mainLighten,
      borderColor: mainIsLight ? mainDarken : mainLighten,
    },
  });

  const outlinedVariant = css({
    background: contrastColor,
    color: mainColor,
    borderColor: "currentcolor",
    "&:not(:disabled):hover": {
      background: mainColor,
      color: contrastColor,
      borderColor: mainColor,
    },
  });

  const transparentVariant = css({
    background: "transparent",
    color: mainColor,
    borderColor: "transparent",
    "&:not(:disabled):hover": {
      background: mainIsLight
        ? lighten(contrastColor, 0.15)
        : darken(contrastColor, 0.15),
    },
  });

  const iconType = css({
    aspectRatio: 1,
    padding: 6,
    justifyContent: "center",
    minHeight: theme.font.size.xxl,
    "& svg": {
      height: "100%",
    },
    "&&": {
      borderWidth: 1,
      borderRadius: "50%",
    },
  });

  const squareType = css({
    borderRadius: 2,
  });

  const roundType = css({
    borderRadius: "1em",
  });

  return {
    root,
    [ButtonVariant.FILLED]: filledVariant,
    [ButtonVariant.OUTLINED]: outlinedVariant,
    [ButtonVariant.TRANSPARENT]: transparentVariant,
    [ButtonType.ICON]: iconType,
    [ButtonType.SQUARE]: squareType,
    [ButtonType.ROUND]: roundType,
  };
}
