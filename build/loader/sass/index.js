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
        'sass-loader'
    ],
}