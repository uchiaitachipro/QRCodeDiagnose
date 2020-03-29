const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const isDevMode = process.env.NODE_ENV === 'development';

const prodConfig = {
  mode: "production",
  plugins: [new CleanWebpackPlugin()]
};

module.exports = prodConfig;
