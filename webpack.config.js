const path =require(`path`);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // モードの設定
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/main.js',
    },
    module: {
        rules: [
          {
            test: /\.css/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
              }
            ],
          },
          {
            test: /\.png|\.jpg/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  esModule: false,
                  name: 'images/[name].[ext]',
                },
              },
            ],
          },
          {
            test: /\.pug/,
            use: [
              {
                loader: 'html-loader',
              },
              {
                loader: 'pug-html-loader',
                options: {
                  pretty: true,
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: './stylesheets/main.css',
        }),
        new HtmlWebpackPlugin({
          template: './src/templates/index.pug',
          filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
          template: './src/templates/access.pug',
          filename: 'access.html',
        }),
        new CleanWebpackPlugin(),
      ],
    };