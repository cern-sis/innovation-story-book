const path = require('path');

module.exports = (baseConfig) => {
  baseConfig.config.module.rules.push({
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
    include: path.resolve(__dirname, '../src/'),
  });

  return baseConfig.config;
};