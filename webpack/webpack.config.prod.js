const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const isDevMode = process.env.NODE_ENV === 'development';

console.log("[production] current env:\t" + isDevMode);

const prodConfig = {
  mode: "production",
  // plugins: [new CleanWebpackPlugin()]
};

module.exports = prodConfig;
