const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
    entry: path.resolve(__dirname, './index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true
        })
    ]
}

if (isDev) {
    config.devServer = {
        contentBase: './dist',
        port: 8080,
        overlay: {
            errors: true,
        },
        hot: true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config