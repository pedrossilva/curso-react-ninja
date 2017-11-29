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
        // rules: [{
        //     enforce: "pre",
        //     test: /\.js$/,
        //     include: /src/,
        //     loader: 'standard'
        // }],
        loaders
    }
}