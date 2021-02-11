const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyPlugin = require("copy-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry  : "./src/App.tsx",
  plugins: [
    new miniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new copyPlugin({
      patterns: [
        {from: "public"}
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : miniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss", '.sass'],
  },
  output : {
    filename : "bundle.js",
    path: path.resolve(__dirname, "out")
  }
};