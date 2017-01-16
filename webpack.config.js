var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }, {
                test: /\.css$/,
                loaders: ['style', 'css']
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }, {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=8192'
            }

        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        proxy: {
            '/api/*': {
                target: 'http://music.163.com',
                changeOrigin: true,
                secure: false
            },
            '/eapi/*': {
                target: 'http://music.163.com',
                changeOrigin: true,
                secure: false
            },
        }
    },
};
