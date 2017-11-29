'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        historyApiFallback: true,
        stats: { colors: true }
    })
    .listen(3000, err => {
        if(err) console.log(err)
        else console.log('Listening on http://localhost:3000')
    })