"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SassLoaderConfig = require("./loader/sass");
const TsLoaderConfig = require("./loader/typescript");
const VueLoaderConfig = require("./loader/vue");
const CssLoaderConfig = require("./loader/css");
const EsLoaderConfig = require("./loader/js");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

function resolve(dirname) {
    return path.join(__dirname, '..', dirname)
}

module.exports = {
    entry: resolve("src"),
    output: {
        path: resolve("dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".vue"],
        alias: {
            "@": resolve("src")
        }
    },
    devServer: {
        port: 5000,
        open: true,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public/index.html")
        }),
        new VueLoaderPlugin() // 编译vue文件
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