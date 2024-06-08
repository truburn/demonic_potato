import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function usePageTitleStyles() {
  const theme = useTheme();

  const root = css({
    fontSize: theme.font.size.xl,
    fontWeight: theme.font.weight.light,
    lineHeight: 1,
    color: theme.colors.primary,
    margin: 0,
    marginTop: "1em",
    marginBottom: "0.5em",
    padding: "0.125em",
    borderStyle: "solid",
    borderColor: theme.colors.primary,
    borderWidth: 0,
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    [`@media (max-width: ${theme.widths.paddedContent}px)`]: {
      marginTop: "0.25em",
    },
  });

  return { root };
}
