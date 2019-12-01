//  const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// const isDev = process.env.NODE_ENV === 'development';
// const webpackMode = process.env.NODE_ENV;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

const pagesDir = path.resolve(__dirname, '../src/pages/');
const pages = fs.readdirSync(pagesDir).filter((fileName) => fileName.endsWith('.pug'));

// const PATHS = {
//   src: path.join(__dirname, './src'),
//   dist: path.join(__dirname, './dist'),
//   assets: 'assets/'
// }
//
// const pagesDir = PATHS.src
// const PAGES = fs.readdirSync(pagesDir).filter(fileName => fileName.endsWith('.html'))


const config = {
  entry: path.resolve('./src/scripts/app.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[name].min.js',
    publicPath: '/',
  },
  plugins: [
    ...pages.map((page) => new HtmlWebpackPlugin({
      template: `${pagesDir}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
    })),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new UnminifiedWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: `${path.resolve('./src/static')}`, to: `${path.resolve(__dirname, '../dist')}` },
      { from: `${path.resolve('./src/scripts/libs')}`, to: `${path.resolve(__dirname, '../dist/scripts/libs')}` },
    ]),
  ],
  module: {
    rules: [{
      test: /\.pug$/,
      use: ['pug-loader'],
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'postcss.config.js' } },
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
          cacheDirectory: true,
        },
      },
    },
    ],
  },
  performance: {
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js');
    },
  },
};

module.exports = config;
