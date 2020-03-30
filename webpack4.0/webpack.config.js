const path = require('path')
const htmlwebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new htmlwebpackPlugin({
    template: './src/index.html', //要复制的路径
    filename: 'index.html'
        // 生成的文件名称
        // loading: loading
})
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'), // 打包目录
    output: {
        path: path.join(__dirname, './dist'), // 输出文件目录
        filename: 'bundle.js' // 输出文件名称
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.jpg|png|gif|ttf|eot|svg|woff|woff2$/,
                use: 'url-loader?limit=4369488'
                    // limit 用来指定图片的大小当图片的大小（单位字节）小于指定大小时才会被转为base64图片
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                //exclude为排除项，意思是不要处理node_modules中的js文件
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            }

        ]
    }

}