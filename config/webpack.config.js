const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = (env, argv) => {
    return [
        {
            mode: argv.mode,
            devtool: argv.mode === 'development' ? 'cheap-source-map' : false,
            target: 'electron-renderer',
            entry: {
                renderer: path.join(__dirname, '../src/renderer/renderer.js'),
            },
            output: {
                filename: '[name].bundle.js',
                path: path.resolve(__dirname, '../dist')
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        use: 'vue-loader'
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            // Creates `style` nodes from JS strings
                            'style-loader',
                            // Translates CSS into CommonJS
                            'css-loader',
                            // Compiles Sass to CSS
                            'sass-loader',
                        ],
                    },
                ]
            },
            plugins: [
                new VueLoaderPlugin(),
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, '../src/renderer/index.html')
                })
            ],
            optimization: {
                splitChunks: {
                    chunks: 'all'
                }
            }
        },
        {
            mode: argv.mode,
            node: {
                __dirname: false
            },
            target: 'electron-main',
            entry: {
                main: path.join(__dirname, '../src/electron/main.js'),
            },
            output: {
                filename: '[name].bundle.js',
                path: path.resolve(__dirname, '../dist')
            },
        },
        {
            mode: argv.mode,
            target: 'webworker',
            entry: {
                worker: path.join(__dirname, '../src/worker/worker.js'),
            },
            output: {
                filename: '[name].bundle.js',
                path: path.resolve(__dirname, '../dist')
            },
        }
    ];
}