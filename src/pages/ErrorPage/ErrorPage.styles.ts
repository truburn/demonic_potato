import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useErrorPageStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    maxWidth: theme.widths.paddedContent,
    margin: "0 auto",
  });

  const paragraph = css({
    fontFamily: theme.font.serif,
  });

  const message = css({
    fontWeight: theme.font.weight.semiBold,
    fontSize: theme.font.size.large,
  });

  const stackLine = css({
    marginLeft: "1.5rem",
    fontWeight: theme.font.weight.light,
  });

  return { root, paragraph, message, stackLine };
}
