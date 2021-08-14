import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Toast, ToastProps } from './Toast';

export default {
  title: 'Component/Toast',
  component: Toast,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Top = Template.bind({});

Top.args = {
  backgroundColor: '#FFFF',
  title: 'Error',
  content: 'Sorry, an error occured',
  titleColor: '#ff1135',
  descriptionColor: '#222',
  icon: 'error'
}
