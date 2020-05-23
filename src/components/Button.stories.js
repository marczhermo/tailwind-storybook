import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Container from './Container';

export default {
  title: 'Button',
  component: Button,
  decorators: [storyFn => <Container>{ storyFn() }</Container>],
};

export const Demo = () => (
  <Button onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const Simple = () => (
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
  </button>
);

export const Emoji = () => (
    <button onClick={action('clicked')}
        className="px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100"
    >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </button>
);

export const ThreeD = () => (
  <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
    Button
  </button>
);

export const Download = () => (
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
      </svg>
    <span>Download</span>
  </button>
);
