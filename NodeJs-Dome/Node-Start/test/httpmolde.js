
//1.导入模块
const http = require("http")

//2.创建web服务器实例
const server = http.createServer()

//3.为服务器实例对象绑定request事件
//3.1 通过on方法绑定事件，第一个参数为事件名称
server.on("request",(req,res)=>{

    // var url = req.url;
    // var headers = req.headers;
    // var method = req.method;
    // var complete = req.complete
    // var httpversion = req.httpVersion
    // console.log(url+"\n"+headers+"\n"+method+"\n"+complete+"\n"+httpversion)

    var data = '<h1>你好，Node.js<h1>'

    res.setHeader("Content-Type","text/html;charset=utf-8")
    res.end(data)
    //3.2 只要有客户端访问服务器就会触发request事件
    console.log("客户端访问服务器")
})

//4.启动服务器
//4.1 使用listen()方法即可启动当前的服务器实例(参数1：指定启动后监听的端口 参数2：回调函数)
server.listen(8999,()=>{
    
    console.log("http server runing at http://127.0.0.1:8999")
})



