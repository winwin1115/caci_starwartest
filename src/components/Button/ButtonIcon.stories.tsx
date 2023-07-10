import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import ButtonIcon from "./ButtonIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Button/ButtonIcon",
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args} />
);

export const Primary = Template.bind({});
