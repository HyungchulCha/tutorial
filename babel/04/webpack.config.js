const path = require('path');

module.exports = {
  //entry: ['core-js', './src/0401.js'],
  entry: './src/0401.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '0401.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
