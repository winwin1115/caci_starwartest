import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ButtonBase from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Button/Button',
  component: ButtonBase,
} as ComponentMeta<typeof ButtonBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonBase> = (args) => (
  <ButtonBase {...args} />
);

export const Primary = Template.bind({});
