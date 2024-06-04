import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useFooterStyles() {
  const theme = useTheme();

  const root = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    fontSize: theme.font.size.small,
    background: theme.colors.standard,
    color: theme.colors.contrast,
  });

  const icon = css({
    padding: "0 1ch",
  });

  const content = css({
    margin: 0,
    padding: 0,
  });

  return { root, icon, content };
}
