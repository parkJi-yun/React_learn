const path = require('path');

module.exports = {
    name: 'word-chain-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    },  // 입력

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env',  '@babel/preset-react'],
            },
            exclude: path.join(__dirname, 'node_modules'),
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력
};