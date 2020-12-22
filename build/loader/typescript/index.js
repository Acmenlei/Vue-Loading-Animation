module.exports = {
    test: /\.tsx?$/i,
    use: [{
        loader: "ts-loader"
    }],
    exclude: /node_modules/
}