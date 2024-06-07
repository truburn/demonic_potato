import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function usePageNotFoundStyles() {
  const theme = useTheme();

  const root = css({
    flex: 1,
    maxWidth: theme.widths.paddedContent,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  });

  const content = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  const title = css({
    margin: 0,
    color: theme.colors.secondary,
    textAlign: "center",
    fontSize: theme.font.size.xxl,
    fontWeight: theme.font.weight.semiBold,
  });

  const icon = css({
    color: theme.colors.primary,
    fontSize: "20rem",
    margin: theme.font.size.xxl,
  });

  const redirectMsg = css({
    textAlign: "center",
    fontSize: theme.font.size.large,
  });

  const redirectLink = css({
    display: "block",
    margin: theme.font.size.regular,
    fontSize: theme.font.size.regular,
  });

  return { root, content, title, icon, redirectMsg, redirectLink };
}
