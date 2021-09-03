module.exports = {
    plugins: [
        // 自动加入前缀插件 - 一直报错
        // require("autoprefixer")

        // 更加强大 可以识别例如 #12345678 这种颜色，把后两位转化成透明度
        require("postcss-preset-env")
    ]
}