const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // 오른쪽에 있는 것부터 로더가 실행된다.
        // css-loader : css-module, @import, url() 등의 처리를 도와준다.
      },
      {
        test: /\.(png|jpg|gif)$/,
        // use: 'file-loader',
        use: [
          {
            loader: 'url-loader',
            options: {
              limits: 1000000,
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },
  mode: 'production',
};
