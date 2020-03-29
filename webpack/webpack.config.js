const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const devConfig = require('./webpack.config.dev');
const productionConfig = require('./webpack.config.prod');

let config = process.env.NODE_ENV === 'development' ? devConfig : productionConfig;

console.log("[base] current env is development :\t" + process.env.NODE_ENV);

module.exports = merge(baseConfig,config);