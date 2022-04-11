const path = require('path');

module.exports = {
  entry: './src/01.js',
  output: {
    path: path.resolve(__dirname, 'dist_webpack'),
    filename: '01.bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  optimization: { minimizer: [] },
};
