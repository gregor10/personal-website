const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false&reload=true',
            path.join(__dirname, '../client/main.jsx')]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
        modules: [
            'node_modules',
        ]
    },
    mode: 'development',
    target: 'web',
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.m?js(x)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/react'
                    ]
                }
            }
        },
        {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpg|gif|mp3)$/,
            loader: 'url-loader',
            options: {
                limit: 8192,
            },
        },
        {
            test: new RegExp(`\\.woff$`),
            loader: 'url-loader',
            options: {
                name: 'fonts/[name].[ext]',
                limit: 10000,
                mimetype: 'application/font-woff'
            }
        },
        {
            test: new RegExp(`\\.woff2$`),
            loader: 'url-loader',
            options: {
                name: 'fonts/[name].[ext]',
                limit: 10000,
                mimetype: 'application/font-woff2'
            }
        },
        {
            test: new RegExp(`\\.otf$`),
            loader: 'url-loader',
            options: {
                name: 'fonts/[name].[ext]',
                limit: 10000,
                mimetype: 'font/opentype'
            }
        },
        {
            test: new RegExp(`\\.ttf$`),
            loader: 'url-loader',
            options: {
                name: 'fonts/[name].[ext]',
                limit: 10000,
                mimetype: 'application/octet-stream'
            }
        },
        {
            test: new RegExp(`\\.eot$`),
            loader: 'url-loader',
            options: {
                name: 'fonts/[name].[ext]',
                limit: 10000,
                mimetype: 'application/vnd.ms-fontobject'
            }
        },
        {
            test: new RegExp(`\\.svg$`),
            loader: 'url-loader',
            options: {
                name: 'fonts/[name].[ext]',
                limit: 10000,
                mimetype: 'image/svg+xml'
            }
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "client/index.html",
            filename: "./index.html",
            excludeChunks: ['server']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
