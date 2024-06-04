import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useNavigationStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "end",
  });

  const navLink = css({
    aspectRatio: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem",
    margin: "0 0.25rem",
    color: theme.colors.contrast,
    opacity: 0.5,
    "&:hover, &:focus, &:active, &.active": {
      color: theme.colors.contrast,
      opacity: 1,
    },
  });

  const navIcon = css({
    height: "100%",
  });

  return { root, navLink, navIcon };
}
