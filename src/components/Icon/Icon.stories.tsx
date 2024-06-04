import type { Meta, StoryObj } from "@storybook/react";
import { Icon as IconComponent } from "@components/Icon";
import { faCoffee as falCoffee } from "@awesome.me/kit-3d36d6b3e3/icons/classic/light";

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    icon: falCoffee,
  },
};
