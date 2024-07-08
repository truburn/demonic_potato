import type { Meta, StoryObj } from "@storybook/react";
import { FormInput } from "@elements/FormInput";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const TextInput: Story = {
  args: {
    name: "text-input",
    type: "text",
  },
};

export const Textarea: Story = {
  args: {
    name: "textarea",
    type: "text",
    multiline: true,
  },
};

export const Checkbox: Story = {
  args: {
    name: "checkbox",
    type: "checkbox",
  },
};

export const RadioGroup: Story = {
  args: {
    name: "radio-group",
    type: "checkbox-group",
  },
};

export const Select: Story = {
  args: {
    name: "select",
    type: "select",
  },
};

export const NumberInput: Story = {
  args: {
    name: "number-input",
    type: "number",
  },
};
