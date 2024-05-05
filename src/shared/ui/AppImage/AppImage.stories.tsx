import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {},
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
