import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'shared/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {},
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
