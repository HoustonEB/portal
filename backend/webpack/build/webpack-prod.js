const path = require('path');
const common = require('./webpack-config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "js/prod-main[hash].js",
        path: path.resolve(__dirname, '../../../dist/prod/')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'page/prod-main.html',
            template: 'backEnd/webpack/templates/dev-page.html'
        })
    ]
});