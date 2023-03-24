const express = require("express")

const app = express()

app.get("/",function(req,res){

    //模拟一个异常进行抛出
    throw new Error("服务器内部发生错误")
    res.send("Home Page")
})

//错误中间件
app.use(function(err,req,res,next){

    console.log("服务器发送错误："+err.message)
    res.send('Error'+err.message)

})

app.listen(8888,()=>{

    console.log("服务器启动: http://127.0.0.1:8888")

})













