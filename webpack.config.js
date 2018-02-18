'use strict'

const path = require('path')
const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  devtool: 'source-map',

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  // entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new DashboardPlugin(),

    new HtmlPlugin({
      title: 'Curso React Ninja',
      template: path.resolve(__dirname, './src/index-template-dev.html'), // Load a custom template (lodash by default see the FAQ for details)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules']
      }
    ]
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components'),
      css: path.join(__dirname, 'src', 'css'),
    }
  }
}
