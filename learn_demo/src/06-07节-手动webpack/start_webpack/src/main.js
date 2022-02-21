//ES6导入
import { sum } from "./js/math";
// commonjs导入
const { priceFormat } = require('./js/format')


// 使用这个文件，就产生了依赖
import "./js/element"

console.log(sum(20, 30))
console.log(priceFormat())