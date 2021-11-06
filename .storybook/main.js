
module.exports = {
  stories: ["../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loaded', 'css-loader', 'postcss-loader', 'sass-loader'],
    })

    return config
  }
}