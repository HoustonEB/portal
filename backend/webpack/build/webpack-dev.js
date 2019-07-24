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
        contentBase: path.resolve(__dirname, '../../../dist/dev/'),
        compress: true,
        host: '127.0.0.1',
        port: 8888,
        // hot: true,
        openPage: 'page/dev-page.html',
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'page/dev-page.html',
            template: 'backend/webpack/templates/dev-page.html'
        })
    ]
});