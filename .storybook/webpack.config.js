const path = require("path");

// https://github.com/webpack-contrib/less-loader/issues/303
module.exports = (baseConfig) => {
  baseConfig.config.module.rules.push({
    test: /\.less$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      {
        loader: "less-loader",
        options: {
          lessOptions:{
            modifyVars:  require("../src/styleVariables"),
          }
        },
      },
    ],
    include: path.resolve(__dirname, "../src/"),
  });

  return baseConfig.config;
};
