const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
    //模块的入口文件
    entry: {
        path: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.glsl$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './public/index.html'
        })
    ],
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 3000
    }
};
