import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import Container from './Container';

export default {
  title: 'Welcome',
  component: Welcome,
  decorators: [storyFn => <Container>{ storyFn() }</Container>],
};

export const ToStorybook = () => (
    <div className="max-w-sm mx-auto overflow-hidden rounded shadow-lg">
        <Welcome showApp={linkTo('Button')} />
    </div>
);

ToStorybook.story = {
  name: 'to Storybook',
};
