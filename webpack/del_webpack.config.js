const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// const isDev = process.env.NODE_ENV === 'development';
// const webpackMode = process.env.NODE_ENV;

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

const pages_dir = path.resolve(__dirname, 'src/pages/');
const pages = fs.readdirSync(pages_dir).filter((fileName) => fileName.endsWith('.pug'));

const config = {
  entry: path.resolve('./src/scripts/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].min.js',
    publicPath: '/',
  },
  plugins: [
    ...pages.map((page) => new HtmlWebpackPlugin({
      template: `${pages_dir}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
    })),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new UnminifiedWebpackPlugin(),
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
        // {
        //   loader: "postcss-loader",
        //   options: {sourceMap: true, config: { path: 'src/js/postcss.config.js'}}
        // },
        {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    },
      // {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: {
      //         loader: 'babel-loader',
      //         options: {
      //             presets: ['@babel/preset-env'],
      //             plugins: ['@babel/plugin-transform-runtime'],
      //             cacheDirectory: true,
      //         },
      //     },
      // },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {}
  if (argv.mode === 'production') {}
  return config;
};
