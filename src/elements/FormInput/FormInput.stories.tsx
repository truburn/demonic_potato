import type { Meta, StoryObj } from "@storybook/react";
import { FormInput, FormInputProps, InputProps } from "@elements/FormInput";
import { css } from "@emotion/css";
import { useState } from "react";

const meta: Meta<typeof FormInput> = {
  component: FormInput,
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const TextInput: Story = {
  render: (args: FormInputProps) => <MockStory variations={[]} {...args} />,
  args: {
    name: "text-input",
    label: "Text Input",
    input: {
      type: "text",
    },
  },
};

export const Textarea: Story = {
  render: (args: FormInputProps) => <MockStory variations={[]} {...args} />,
  args: {
    name: "textarea",
    label: "Textarea",
    input: {
      type: "text",
      multiline: true,
    },
  },
};

export const Checkbox: Story = {
  render: (args: FormInputProps) => <MockStory variations={[]} {...args} />,
  args: {
    name: "checkbox",
    label: "Checkbox",
    input: {
      type: "checkbox",
    },
  },
};

export const RadioGroup: Story = {
  render: (args: FormInputProps) => <MockStory variations={[]} {...args} />,
  args: {
    name: "radio-group",
    label: "Radio Group",
    input: {
      type: "checkbox-group",
      options: [
        { label: "DJs flock by when MTV ax quiz prog." },
        { label: "Junk MTV quiz graced by fox whelps." },
        { label: "Bawds jog, flick quartz, vex nymphs." },
        { label: "Waltz, bad nymph, for quick jigs vex!" },
        { label: "Fox nymphs grab quick-jived waltz." },
      ],
    },
  },
};

export const Select: Story = {
  render: (args: FormInputProps) => <MockStory variations={[]} {...args} />,
  args: {
    name: "select",
    label: "Select",
    input: {
      type: "select",
      options: [
        { value: "opt1", label: "Option 1" },
        { value: "opt2", label: "Option 2" },
        { value: "opt3", label: "Option 3" },
        { value: "opt4", label: "Option 4" },
        { value: "opt5", label: "Option 5" },
      ],
    },
  },
};

export const NumberInput: Story = {
  render: (args: FormInputProps) => <MockStory variations={[]} {...args} />,
  args: {
    name: "number-input",
    label: "Number",
    input: {
      type: "number",
    },
  },
};

export const NumberRangeInput: Story = {
  render: (args: FormInputProps) => <MockStory variations={[]} {...args} />,
  args: {
    name: "number-range",
    label: "Number Range",
    input: {
      type: "number",
      isRange: true,
    },
  },
};

const classes = {
  story: css({
    width: "50%",
    margin: "0 auto",
  }),
  row: css({
    borderBottomStyle: "solid",
    borderBottomColor: "rgba(0, 0, 0, 0.25)",
    borderBottomWidth: 1,
    padding: "1rem 0",
    "&:last-of-type": {
      borderBottom: "none",
    },
  }),
};

interface MockStoryProps extends Partial<FormInputProps> {
  variations: Partial<FormInputProps>[];
  input: InputProps;
}

const STANDARD_VARIATIONS = [
  {
    id: "default-input",
    label: "Default",
  },
  {
    id: "required",
    label: "Required",
  },
  {
    id: "disabled",
    label: "Disabled",
  },
];

function MockStory(props: MockStoryProps) {
  const { variations, name, input, label } = props;

  return (
    <div className={classes.story}>
      {STANDARD_VARIATIONS.map((variant) => {
        const varID = [input.type, variant.id].join("-");
        const varLabel = [variant.label, label].join(" ");
        const varName = [name, variant.id].join("-");
        return (
          <div key={varID} className={classes.row}>
            <FormInput
              {...variant}
              id={varID}
              name={varName}
              label={varLabel}
              input={input}
            />
          </div>
        );
      })}
      {variations.map((variant) => (
        <div key={variant.id} className={classes.row}>
          {variant.label}
        </div>
      ))}
    </div>
  );
}
