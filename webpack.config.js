let path = require('path'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')

let NODE_ENV = process.env.NODE_ENV;
var config = require('./package.json');

module.exports = {
    entry: {
        js: './source/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'vue-device.js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract('css-loader'),
                    sass: ExtractTextPlugin.extract('css-loader!sass-loader'),
                    scss: ExtractTextPlugin.extract('css-loader!sass-loader')
                },
                transformToRequire: {
                    video: ['src','poster'],
                    source: 'src'
                }
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader?cacheDirectory',
            exclude: /node_modules/,
            options: {
                presets: ["es2015", "stage-2"],
                plugins: ['transform-runtime']
            }

        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
        }, {
            test: /\.(otf|ttf|woff)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }, {
            test: /\.(mpeg|mp4|webm|ogv)$/,
            loader: 'file-loader?name=videos/[name].[ext]'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: 'file-loader?name=img/[name]-[hash:7].[ext]'
        }, {
            test: /\.(wav|mp3)$/,
            loader: 'file-loader?name=sounds/[name].[ext]&context=./source/sounds'
        }]
    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'components': path.resolve(__dirname, 'source/components'),
            'sass': path.resolve(__dirname, 'source/sass'),
            'js': path.resolve(__dirname, 'source/js')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        host: '0.0.0.0',
        port: 3000,
        quiet: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: 'eval',
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ]
}

// Fix for error messages
process.noDeprecation = true;


if (NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            },
            'VERSION': JSON.stringify(config.version)
        }),
        new ExtractTextPlugin('vue-device.css'),
        new CleanWebpackPlugin(['dist'], {
            exclude: ['favicon']
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            comments: false,
            compress: {
                warnings: false
            }
        })
    ])
}

