const path = require('path');
const common = require('./webpack-config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "js/dev-main[hash].js",
        path: path.resolve(__dirname, '../../../dist/dev/')
    },
    devServer: {
        contentBase: path.join(__dirname, '../../../dist'),
        compress: true,
        // host: '127.0.0.1',
        host: '127.0.0.1',
        port: 6666,
        // hot: true,
        // openPage: './dist/page/main.html'
        open: 'Chrome'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'page/dev-main.html',
            template: 'backEnd/webpack/templates/dev-page.html'
        })
    ]
});