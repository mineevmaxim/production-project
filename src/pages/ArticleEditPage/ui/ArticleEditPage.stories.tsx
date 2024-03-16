import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {},
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
