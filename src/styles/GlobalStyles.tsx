import { Global, css } from "@emotion/react";
import { darken } from "color2k";

export default function GlobalStyles() {
  return (
    <Global
      styles={[
        css`
          @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Josefin+Slab:ital,wght@0,100..700;1,100..700&display=swap");
        `,
        (theme) => ({
          html: {
            margin: 0,
            padding: 0,
          },
          body: {
            margin: 0,
            padding: 0,
            background: theme.colors.contrast,
            color: theme.colors.standard,
            width: "100vw",
            height: "100vh",
            fontFamily: theme.font.sans,
            fontSize: theme.font.size.regular,
            fontWeight: theme.font.weight.light,
            overflow: "hidden",
          },
          "#dish": {
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-between",
            overflow: "hidden",
          },
          a: {
            textDecoration: "none",
            color: darken(theme.colors.primary, 0.1),
            transition: "ease all 0.5s",
            fontFamily: theme.font.serif,
            fontWeight: theme.font.weight.regular,
            "&:hover": {
              textDecoration: "underline",
              color: theme.colors.primary,
            },
          },
        }),
      ]}
    />
  );
}
