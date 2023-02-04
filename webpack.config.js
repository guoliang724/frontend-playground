const webpack = require("webpack");
const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const styleRegex = /\.(less|css)$/;
const moduleRegex = /\.module\.(less|css)$/;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash:5].js",
  },
  devtool: "source-map",
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    open: true,
    historyApiFallback: {
      index: "./index.html",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "node_modules"),
    },
    extensions: [".tsx", "jsx", ".ts", ".js", ".json"], // 引入模块没有给扩展名，
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                ["@babel/preset-env"],
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
                [
                  "@babel/preset-typescript",
                  {
                    isTSX: true,
                    allExtensions: true,
                  },
                ],
              ],
              plugins: [
                [
                  "import",
                  {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: "css",
                  },
                ],
                ["@babel/plugin-transform-runtime"],
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                ["@babel/plugin-proposal-class-properties", { loose: true }],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },

      {
        test: styleRegex,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "less-loader",
        ],
        // exclude: /node_module/,
      },
      {
        test: moduleRegex,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWepackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
