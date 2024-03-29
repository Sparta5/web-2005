const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode 可选 development 或 production ，默认为后者
  // production 会默认压缩代码并进行其他优化（如 tree shaking）
  mode: "production",
  entry: path.join(__dirname, "src", "index"),
  output: {
    filename: "bundle.[contenthash].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ["babel-loader"],
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
  ],
};
