const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const outputDir = path.resolve(__dirname,'..');

module.exports = {
  
  entry: ["./lib/index.tsx"],

  output: {
    path: outputDir + "/dist",
    filename: "app.[hash].js",
    chunkFilename: "[name].[chunkhash].js"
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules\/core-js/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss", ".css", ".ts", ".tsx"],
    modules: ["node_modules"]
  },

  plugins: [new HtmlWebpackPlugin({
    template: './lib/index.html'
  })]
};
