
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "none",
  entry: {
    "rcFormSimple": "./src/components/index.js",
    "rcFormSimple.min": "./src/components/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "lib"),
    library: "plugin", // 打包暴露出去库的名称
    libraryExport: "default", // 
    libraryTarget: "umd", // var | this | global | window | umd | commonJS
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

  /** umd */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // production下默认开启  ugifyPlugin碰到es6打包会出错，而他不会
        include: /\.min.js$/,
      })
    ]
  }
}