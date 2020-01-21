const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development', //development production 一般在开发阶段会使用development 上线阶段使用produdtion会压缩
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'), //输出文件路径
        filename: 'bundle.js' //输出文件名称
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|svg|woff|woff2$/,
                use: 'url-loader?limit=28623'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
}