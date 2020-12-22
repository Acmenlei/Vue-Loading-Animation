const WebpackMerge = require("webpack-merge");
const BaseConfig = require("./webpack.base.config");
const DevConfig = require("./webpack.dev.config");
const ProConfig = require("./webpack.pro.config");

const config = process.NODE_ENV === "development" ? DevConfig : ProConfig;

module.exports = WebpackMerge.merge(BaseConfig, config);