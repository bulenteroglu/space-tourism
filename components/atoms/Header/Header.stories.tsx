import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderOne = Template.bind({});
export const HeaderTwo = Template.bind({});
export const HeaderThree = Template.bind({});
export const HeaderFour = Template.bind({});
export const HeaderFive = Template.bind({});

HeaderOne.args = {
  label: 'Earth',
  level: 1,
};
HeaderTwo.args = {
  label: 'VENUS',
  level: 2,
};

HeaderThree.args = {
  label: 'JUPITER & SATURN',
  level: 3,
};

HeaderFour.args = {
  label: 'URANUS, NEPTUNE, & PLUTO',
  level: 4,
};

HeaderFive.args = {
  label: 'SO, YOU WANT TO TRAVEL TO SPACE',
  level: 5,
};
