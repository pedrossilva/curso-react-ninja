'use strict';

const path = require('path')
const webpack = require('webpack')
var loaders = require('./webpack.loaders')

module.exports = {
    devtool: "source-map",
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'standard-loader',
                exclude: /(node_modules)/,
                options: {
                    // Emit errors instead of warnings (default = false)
                    error: false,
                    // enable snazzy output (default = true)
                    snazzy: true,
                    // other config options to be passed through to standard e.g.
                    parser: 'babel-eslint'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|server)/,
                loader: 'babel-loader'
            }
        ]
        // loaders: loaders
    }
}
