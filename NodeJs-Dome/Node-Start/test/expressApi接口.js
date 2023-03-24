const express = require("express")

const app = express()

//导入路由
const router = require("./apiRouter")

//导入cors模块
const cors = require("cors")

//在配置cors中间件之前，配置JSONP接口
app.get("/api/jsonp",(req,res)=>{
    //1.获取客户端发送过来的回调函数名称
    const funcName = req.query.callback
    //2.得到要通过JSONP形式发送给客户端的数据
    const data = {name:'wql',age:22}
    //3.拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    //4.响应给客户端的<script>标签进行解析执行
    res.send(scriptStr)
})

//绑定cors
app.use(cors())

//这是开启了CORS的接口
app.get("/api/get",()=>{

    
})

//绑定router
// app.use(router)

app.listen(8999,()=>{

    console.log("服务器启动:http://127.0.0.1:8999")

})
