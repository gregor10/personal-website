const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
// const HtmlReplaceWebPackPlugin = require('html-replace-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        main: './client/main.jsx'
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
    target: 'web',
    devtool: '#source-map',
    // Webpack 4 does not have a CSS minifier, although
    // Webpack 5 will likely come with one

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                },
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
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
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                // Loads CSS into a file when you import it via Javascript
                // Rules are set in MiniCssExtractPlugin
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
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
                    }
                ]
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
            },
            // Replace lambda url
            // {
            //     test: /\.js$/,
            //     use: [{
            //         loader: 'string-replace-loader',
            //         options: {
            //             search: 'localhost_url',
            //             replace: 'production_url'
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './client/index.html',
            filename: './index.html',
            favicon: 'public/favicon.png'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        // Replace fb app id
        // new HtmlReplaceWebPackPlugin([
        //     {
        //         pattern: 'dev_app_id',
        //         replacement: 'prod_app_id'
        //     }
        // ])
    ]
}
