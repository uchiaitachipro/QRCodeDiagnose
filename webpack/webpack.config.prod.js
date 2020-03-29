const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isDevMode = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prodConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          }

        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevMode ? "[id].css" : "[id].[hash].css"
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = prodConfig;
