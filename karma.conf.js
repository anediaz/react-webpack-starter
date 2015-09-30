module.exports =  {
    basePath: '.',
    browsers: ['Chrome', 'Firefox', 'IE'],
    files: [
        { pattern: 'tests.webpack.js', watched: false }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
        'tests.webpack.js': ['webpack']
    },
    webpack: {
        module: {
            loaders: [
                {
                    test: /\.jsx?/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        watch: true
    },
    webpackServer: {
        noInfo: true
    }
};
