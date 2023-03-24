const path =  require("path")

//1,join拼接
var join = path.join(__dirname,"/wql/ll")
console.log("join拼接："+join)

//2,basename获取路径中的文件名
var filepath1 = "/wql/jj/kk.html"
var basename = path.basename(filepath1)
console.log("basename获取路径中的文件名"+basename)

//3,extname获取路径中的拓展名
var filepath2 = "/wql/jj/kk.html"
var extname = path.extname(filepath2)
console.log("extname获取拓展名"+extname)

