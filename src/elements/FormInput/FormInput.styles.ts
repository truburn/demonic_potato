import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useFormInputStyles() {
  const theme = useTheme();

  const root = css({});

  const legend = css({});

  const label = css({});

  const input = css({});

  return { root, legend, label, input };
}
