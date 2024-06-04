import { css } from "@emotion/css";

export function usePageStyles() {
  const root = css({
    flex: 1,
    overflow: "auto",
  });

  return { root };
}
