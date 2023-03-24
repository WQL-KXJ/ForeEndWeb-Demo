//1.导入模块
const http = require("http")

//2.创建web服务器实例
const server = http.createServer()


server.on("request",(req,res)=>{
    //延迟5秒
    setTimeout(function(){},5000);
    var data = '<h1>你好，Node.js<h1>'
    res.setHeader("Content-Type","text/html;charset=utf-8")
    res.end(data)
    console.log("延迟5秒 客户端访问服务器")
})

//3.启动服务器
server.listen(8999,()=>{
   
    console.log("http server runing at http://127.0.0.1:8999")
})