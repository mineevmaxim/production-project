import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';

export default {
    title: 'shared/RatingCard',
    component: RatingCard,
    argTypes: {},
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
