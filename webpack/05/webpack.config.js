const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        page1: './src/index3.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new CleanWebpackPlugin()],
    mode: 'production'
}