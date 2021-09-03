const path = require('path')

// webpack是在node环境下运行的，所以必须写commonsjs规范
module.exports = {
    entry: "./src/main.js",
    output: {
        // path:'必须是绝对路径'
        // 这个就是绝对路径，但是太长，一般用node的文件路径拼接，用到path
        // path:'D:\LHB\itVideoProject\vue3_ts_lhb\learn_demo\src\06-手动webpack\start_webpack '

        // 调用resolve函数，进行两个路径拼接
        // __dirname:当前文件所在的绝对路径，也就是webpack.config.js的当前绝对路径
        path: path.resolve(__dirname, './build'),
        // 打包后文件名
        filename: "bundle.js"
    },
    // 配置loader，三种方式

    // 1、内联方式，很少用
    // ！号是做分割的，必须写
    // import 'css-loader!../css/style.css'

    // 不说了
    // 2、CLI方式（webpack5中不再使用）

    // 3、配置方式
    // 模块
    module: {
        // 规则
        rules: [
            // 每一个规则，每一个rule
            {
                // 匹配要使用rule的文件
                // 正则里的.有有特殊含义，需要使用\符号转义,表示是一个真正的点
                // $:已什么后缀结尾，这里是已.css结尾
                test: /\.css$/,

                //写法1、语法糖 匹配到文件使用什么规则
                // loader:"css-loader"

                // 写法2、一个laoder
                // use:"css-loader"

                // 写法3、多个loader，加数组..有严格的执行顺序，先加载后面的
                use: ["style-loader", "css-loader", "postcss-loader"]
                // 写法4、完整 写法 多个loader，加数组，给loader传参
                // use:[
                //     {
                //         loader:"css-loader",
                //         options:{}//传参
                //     }
                // ]
            },
            {
                // i是忽略大小写
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    }

}