const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const devConfig = require('./webpack.config.dev');
const productionConfig = require('./webpack.config.prod');

let config = process.env.NODE_ENV == 'development' ? devConfig : productionConfig;


module.exports = merge(baseConfig,config);