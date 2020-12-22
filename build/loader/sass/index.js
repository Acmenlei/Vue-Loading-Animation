module.exports = {
    test: /\.scss$/,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                url: true,
                import: true
            }
        },
        // 3.使用sass加载器
        'sass-loader'
    ],
}