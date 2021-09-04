import '../css/style.css'
import '../css/title.less'
import '../css/img.css'

import bgimg from "../img/bg.jpg"

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "你好啊，哈哈"
document.body.appendChild(divEl)

// const bgDivEl = document.createElement("div")
// bgDivEl.className="image-bg"

const imgEl = document.createElement('img')
// 这个路径是相对于 index.html所在路径来找的 ！！！！！！！！
// 这样使用 压根 就没有打包这个图片。因为这里是直接给img赋值了一个字符串，不一定能找到
// 真正的资源位置，需要导入进来使用。当成一个模块去使用
// imgEl.src ="../img/bg.png" 
imgEl.src = bgimg 
document.body.appendChild(imgEl)

document.body.appendChild(bgDivEl)