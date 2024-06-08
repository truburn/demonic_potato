import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle as PageTitleComponent } from "@elements/PageTitle";

const meta: Meta<typeof PageTitleComponent> = {
  component: PageTitleComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PageTitle: Story = {
  args: {
    children: "Sample Page Title",
  },
};
