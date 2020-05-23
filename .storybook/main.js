module.exports = {
    stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register'
  ],
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'postcss-loader'],
    }
  ]
};
