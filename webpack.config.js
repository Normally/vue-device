let path = require('path'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
    merge = require('webpack-merge')

let NODE_ENV = process.env.NODE_ENV
var config = require('./package.json')

var commonConfig = {
    output: {
        path: path.resolve(__dirname, 'dist/'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-runtime'],
                },
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap'],
            },
            {
                test: /\.(otf|ttf|woff)$/,
                loader: 'file-loader?name=fonts/[name].[ext]',
            },
            {
                test: /\.(mpeg|mp4|webm|ogv)$/,
                loader: 'file-loader?name=videos/[name].[ext]',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: 'file-loader?name=img/[name]-[hash:7].[ext]',
            },
            {
                test: /\.(wav|mp3)$/,
                loader: 'file-loader?name=sounds/[name].[ext]&context=./source/sounds',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.scss'],
        alias: {
            vue$: 'vue/dist/vue.common.js',
            components: path.resolve(__dirname, 'source/components'),
            sass: path.resolve(__dirname, 'source/sass'),
            js: path.resolve(__dirname, 'source/js'),
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        host: '0.0.0.0',
        port: 3000,
        quiet: true,
        overlay: true,
    },
    performance: {
        hints: false,
    },
    devtool: 'eval',
    plugins: [new FriendlyErrorsWebpackPlugin()],
}

module.exports = [
    // Config 1: For browser environment
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/source/plugin.js'),
        output: {
            filename: 'vue-device.min.js',
            libraryTarget: 'window',
            library: 'VueClock',
        },
        devtool: '#source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"',
                },
                VERSION: JSON.stringify(config.version),
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: false,
                comments: false,
                compress: {
                    warnings: false,
                },
            }),
        ],
    }),

    // Config 2: For Node-based development environments
    merge(commonConfig, {
        entry: path.resolve(__dirname, 'source/components/Device.vue'),
        output: {
            filename: 'vue-device.js',
            libraryTarget: 'umd',
            library: 'vue-device',
            umdNamedDefine: true,
        },
    }),
]
