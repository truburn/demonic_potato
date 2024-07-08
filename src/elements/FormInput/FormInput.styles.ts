import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useFormInputStyles() {
  const theme = useTheme();

  const root = css({});

  return { root };
}
