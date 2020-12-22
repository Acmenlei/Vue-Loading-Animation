"use strict";

const path = require("path");
console.log(path.resolve(__dirname, "src"));
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SassLoaderConfig = require("./loader/sass");
const TsLoaderConfig = require("./loader/typescript");
const VueLoaderConfig = require("./loader/vue");
const CssLoaderConfig = require("./loader/css");
const EsLoaderConfig = require("./loader/js");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        path: path.join(__dirname, "..", "dist"),
        filename: "index.js"
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx"], // 扩展
        alias:{
            "@": path.join(__dirname, '..','src')
        }
    },
    devServer: {
        open: true,
        hot: true,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public/index.html")
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            TsLoaderConfig,
            SassLoaderConfig,
            VueLoaderConfig,
            CssLoaderConfig,
            EsLoaderConfig
        ]
    }
}