/**
 * Created by Administrator on 2017/10/30.
 */
module.exports = {
    entry: __dirname + "/js/main.js",//入口文件
    //entry: __dirname + "/js/index.js",
    output: {
        path: __dirname + "/dist",//生成的文件放在dist文件夹下；
        filename: 'bundle.js'//在dist文件夹下生成名为bundle的js文件；
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },{
                test:/\.less$/,
                loader:['style-loader','css-loader','less-loader']
            }
        ]
    }
};