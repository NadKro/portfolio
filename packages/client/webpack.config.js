const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    client: {
      overlay: true,
      progress: true,
      reconnect: true
    },
    hot: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, './public')
    },
  },
  entry: './src/index.tsx',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
