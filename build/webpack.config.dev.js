const devConfig = {
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }

        ]
      }
    ]
  },
  devServer: { inline: true }
};

module.exports = devConfig;
