import { css } from "@emotion/css";

export function useIconStyles() {
  const root = css({
    color: "inherit",
    fill: "currentcolor",
  });

  return { root };
}
