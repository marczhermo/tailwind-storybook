import React from 'react';
import '../css/tailwind.css';

const CSS = 'container bg-gray-200 xl:py-5 lg:py-0 md:py-0 sm:py-0'

export const Container = ({ children }) => (
  <div className={ CSS }>
    { children }
  </div>
);

export default Container;
