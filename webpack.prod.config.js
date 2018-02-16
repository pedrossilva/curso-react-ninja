const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  plugins: [
    crp,
    styles,

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin({
      title: 'Curso React Ninja',
      inject: false,
      template: path.resolve(__dirname, './src/index-template.html'),
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
        exclude: /node_modules|\.crp\.css/,
        include: /src/,
        use: styles.extract({
          fallback: "style-loader",
          use: "css-loader?modules"
        })
      },
      {
        test: /\.crp\.css$/,
        exclude: /node_modules/,
        include: /src/,
        use: crp.extract({
          fallback: "style-loader",
          use: "css-loader?modules"
        })
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules|(search|style)\.css/,
      //   include: /src/,
      //   use: styles.extract({
      //     fallback: "style-loader",
      //     use: "css-loader?modules"
      //   })
      // },
      // {
      //   test: /(search|style)\.css$/,
      //   exclude: /node_modules/,
      //   include: /src/,
      //   use: crp.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // }
    ]
  }
}