import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {},
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: '123',
    items: [
        { content: '2134ewdwqd', value: '123' },
        { content: '214131', value: '1234' },
        { content: '2134ed1223wdwqd', value: '1235' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: '123',
    items: [
        { content: '2134ewdwqd', value: '123' },
        { content: '214131', value: '1234' },
        { content: '2134ed1223wdwqd', value: '1235' },
    ],
    direction: 'top left',
};

export const topRight = Template.bind({});
topRight.args = {
    value: '123',
    items: [
        { content: '2134ewdwqd', value: '123' },
        { content: '214131', value: '1234' },
        { content: '2134ed1223wdwqd', value: '1235' },
    ],
    direction: 'top right',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: '123',
    items: [
        { content: '2134ewdwqd', value: '123' },
        { content: '214131', value: '1234' },
        { content: '2134ed1223wdwqd', value: '1235' },
    ],
    direction: 'bottom right',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: '123',
    items: [
        { content: '2134ewdwqd', value: '123' },
        { content: '214131', value: '1234' },
        { content: '2134ed1223wdwqd', value: '1235' },
    ],
    direction: 'bottom left',
};
