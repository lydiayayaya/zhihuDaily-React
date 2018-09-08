const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode:"development",
    module:{
        rules:[
            {test: /\.js$/,use:{
                loader: 'babel-loader',
                options: {
                    presets: ['react',
                        ['env',{
                            targets: {
                                browsers: ['> 1%', 'last 2 versions']
                            }
                        }]
                    ]
                }
            }}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};