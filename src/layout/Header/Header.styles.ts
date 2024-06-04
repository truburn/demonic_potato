import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useHeaderStyles() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    height: 60,
    background: theme.colors.primary,
    color: theme.colors.contrast,
    padding: "0.5rem 1rem",
    boxSizing: "border-box",
  });

  const logoLink = css({
    height: "100%",
    color: theme.colors.contrast,
    "&:hover, &:focus, &:active, &:visited": {
      color: theme.colors.contrast,
    },
  });

  const logo = css({
    height: "100%",
    fill: "currentcolor",
  });

  return { root, logoLink, logo };
}
