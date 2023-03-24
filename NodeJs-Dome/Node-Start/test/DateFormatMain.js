//导入自定义格式化时间模块
const format = require("./DataFormat")

const dt = new Date()

//格式化时间
const formatdt = format.dateformat(dt)

console.log("原始时间格式："+dt)
console.log("时间格式化："+formatdt)

