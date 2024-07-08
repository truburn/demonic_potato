import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useEditBookStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    maxWidth: theme.widths.paddedContent,
    margin: "0 auto",
  });

  const formActions = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-end",
    gap: 2,
  });

  return { root, formActions };
}
