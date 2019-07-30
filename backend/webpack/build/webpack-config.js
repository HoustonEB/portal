const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../../../frontend/src/index.js'),
    resolve: {
        alias: {
            '@frontend': path.resolve(__dirname, '../../../frontend/')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: [
                    'vue-loader',
                ]
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: [
                    // 'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                        publicPath: '../images/',
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    // options: {
                    //     outputPath: 'fonts/'
                    // }
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
};