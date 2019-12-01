const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    writeToDisk: true,
    overlay: true,
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: `${path.resolve('./src/images')}`, to: `${path.resolve(__dirname, '../dist/images')}` },
    ]),
  ],
});
