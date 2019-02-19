const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const webpackRules = require('./rules')
const webpackPaths = require('./paths')
const jsConfig = require('../../../jsconfig.json')

const { paths } = jsConfig.compilerOptions

const aliases = Object.keys(paths).reduce((prev, key) => {
  prev[key] = path.resolve(__dirname, `../../${paths[key][0]}`)
  return prev
}, {})

module.exports = {
  entry: webpackPaths.entryPath,
  module: {
    rules: webpackRules,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: aliases,
  },
  plugins: [
    new Dotenv(),
    new webpack.ProgressPlugin(),
    new HtmlWebPackPlugin({
      template: './app/src/template/index.html',
      title: 'React Boilerplate',
      minify: {
        collapseInlineTagWhitespace: false,
        collapseWhitespace: false,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
    new CleanWebpackPlugin(['public']),
  ],
}
