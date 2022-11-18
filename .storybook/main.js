const path = require("path");

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"],
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.less$/,
  //     use: ["style-loader", {
  //       loader: "css-loader",
  //       options: {
  //         modules: true,
  //         localIdentName: "[local]___[hash:base64:5]"
  //       }},
  //       "less-loader"
  //     ],
  //     include: path.resolve(__dirname, "../src"),
  //   });
  //   return config;
  // }
};
