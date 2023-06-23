const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  devServer: {

    static: './dist',

  },

  plugins: [

    new HtmlWebpackPlugin({

      template: './src/index.html',

    }),

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: 'dist/index.html',
  },
  module: {
    rules: [

      {
        test: /\.css$/,

        use: ['style-loader', 'css-loader', 'sass-loader'],

      },

    ],

  },

};