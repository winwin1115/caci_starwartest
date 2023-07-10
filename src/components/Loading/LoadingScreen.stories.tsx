import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import LoadingScreen from './LoadingScreen';

export default {
  title: 'Component/Loading/LoadingScreen',
  component: LoadingScreen,
} as ComponentMeta<typeof LoadingScreen>;

const Template: ComponentStory<typeof LoadingScreen> = (args) => (
  <LoadingScreen />
);

export const Primary = Template.bind({});
