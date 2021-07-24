const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    // 打包好的文件存放在哪里，以及怎么命名
    path: path.join(__dirname, '/disk'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 50,
              remPrecision: 15
            }
          },
          "less-loader",
        ],
      },
      {
        test: /\.css$/i,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 50,
              remPrecision: 15
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })
  ]
}