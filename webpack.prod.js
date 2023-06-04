/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            }, ],
        }, ],
    },
    plugins: [
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: './sw.bundle.js',
            runtimeCaching: [{
                urlPattern: new RegExp('^https://restaurant-api.dicoding.dev/'),
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'RestaurantCatalogue',
                    cacheableResponse: {
                        statuses: [200],
                    }
                }
            }]
        })
    ],
});