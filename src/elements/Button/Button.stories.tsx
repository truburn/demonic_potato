import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  ButtonType,
  ButtonVariant,
  ButtonProps,
} from "@elements/Button";
import { faCoffee } from "@awesome.me/kit-3d36d6b3e3/icons/classic/light";
import { css } from "@emotion/css";
import { ColorVariant } from "@styles/types";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconButtons: Story = {
  render: () => renderButtons(ButtonType.ICON),
};

export const SquareButtons: Story = {
  render: () => renderButtons(ButtonType.SQUARE),
};

export const RoundButtons: Story = {
  render: () => renderButtons(ButtonType.ROUND),
};

const storyWrapper = css({
  width: "100vw",
  height: "100vh",
  overflow: "auto",
});

const group = css({
  margin: 16,
  padding: 8,
  borderStyle: "solid",
  borderWidth: "1px 0px",
  "& > p": {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: 16,
  },
});

const row = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: 8,
});

function renderButtons(type: ButtonType) {
  const variants = Object.values(ButtonVariant);
  const colors = Object.values(ColorVariant);

  return (
    <div className={storyWrapper}>
      {variants.map((variant) => (
        <div className={group} key={variant}>
          <p>
            Variant: <code>{variant}</code>
          </p>
          <div className={row}>
            {colors.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                buttonType={type}
                icon={type === ButtonType.ICON ? faCoffee : undefined}
              >
                {type !== ButtonType.ICON && "Button Label"}
              </Button>
            ))}
          </div>
          <p>
            Disabled: <code>{variant}</code>
          </p>
          <div className={row}>
            {colors.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                buttonType={type}
                icon={type === ButtonType.ICON ? faCoffee : undefined}
                disabled
              >
                {type !== ButtonType.ICON && "Button Label"}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
