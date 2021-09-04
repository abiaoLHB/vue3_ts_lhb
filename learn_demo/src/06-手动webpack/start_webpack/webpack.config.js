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
        filename: "bundle.js",

        // webpack5代替url-laoder和fileloader的输出也可以写在这里
        // 表示通过asset模式打包后的文件名
        assetModuleFilename:"images/[name]_[hash:8][ext]"
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
            },
            //处理图片 
            // {
            //     // test:/\.(png|jpeg|jpg|gif|svg)$/,
            //     // 问号表示问号前面的字符有0个或者1个
            //     test:/\.(png|jpe?g|gif|svg)$/,

            //     // use:["file-loader"],

            //     // 文件命名规则 通过placehoder完成，webpack提供了大量的placehoder，来显示不同的内容
            //     // [ext] 处理文件的扩展名
            //     // [name] 处理文件的原名称
            //     // [hash] 文件内容使用MD4散列函数处理，生成一个128位hash值
            //     // [contentHash],和hash基本一致
            //     // [hash:<lenght>]截取hash长度
            //     // [path] 相对于webpakc配置文件的路径，用的少
               
            //     use:{
            //         // loader:"file-loader",
            //         // options:{
            //         //     // 打包时，输出到打包目录里的img文件夹下，这个目录可以不写
            //         //     // 而是写到name属性里
            //         //     // outputPath:'img',

            //         //     // 输出图片的名字
            //         //     // [name]:取原先的名字
            //         //     // [hash:8]：设置8位hash值
            //         //     // 下划线知识用来做个区分，加不加都行的
            //         //     // [ext],extension的缩写，表示使用原来的扩展名
            //         //     name:'images/[name]_[hash:8].[ext]'
            //         // }

            //         // 安装了url-loader后，可以只用url-loader了。新版url-loader已默认打包的js里
            //         loader:"url-loader",
            //         options:{
            //             // 打包时，输出到打包目录里的img文件夹下，这个目录可以不写
            //             // 而是写到name属性里
            //             // outputPath:'img',

            //             // 输出图片的名字
            //             // [name]:取原先的名字
            //             // [hash:8]：设置8位hash值
            //             // 下划线知识用来做个区分，加不加都行的
            //             // [ext],extension的缩写，表示使用原来的扩展名
            //             name:'images/[name]_[hash:8].[ext]',
            //             // 阈值：大于多少kb打包到dist里，小于的话，直接转成base64
            //             // 这里要严格控制，阀值太高的话，bunld.js会很大，导致下载bunld.js缓慢
            //             limit: 3*1024
            //         }

            //     }
            // },

            // 处理图片，使用webpack5 资源模块类型
            {
                test:/\.(png|jpeg|jpg|svg|png)$/,
                // type:'asset/resource',//对应file-loader,全部打包，图片名一大串

                // 常用，一下配置相当于url-loader
                type:"asset",
                
                // 也可以写最上面
                // generator:{
                //     filename:"images/[name]_[hash:8][ext]"//[ext]包含点，不需要再写点
                // },
                parser:{
                    dataUrlCondition:{
                        maxSize:2*1024
                    }
                }
            }


        ]
    }

}