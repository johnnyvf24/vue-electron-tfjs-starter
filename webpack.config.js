const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        devtool : 'cheap-source-map',
        target: 'electron-renderer',
        entry: {
            renderer: path.join(__dirname, './src/renderer/renderer.js'),
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, './src/renderer/index.html')
            })
        ],
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    },
    {
        mode: 'development',
        target: 'electron-main',
        entry: {
            main: path.join(__dirname, './src/electron/main.js'),
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
    },
    {
        mode: 'development',
        target: 'webworker',
        entry: {
            worker: path.join(__dirname, './src/worker/worker.js'),
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
    }
];