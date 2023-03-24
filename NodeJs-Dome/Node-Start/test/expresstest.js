//导入express模块
const express = require("express") 

//创建web服务器
const app = express()

//常量mv指向一个中间件函数
const mv = function(req,res,next){

    console.log("这是一个中间件函数")
    //注：当中间件的业务逻辑处理完毕后必须调用next()函数把流转关系交给下一个中间件或路由
    next()
}

app.use(express.static("./public"))
app.use(mv)

//监听get请求
app.get("/get",(req,res)=>{

    //调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send(req.query)

})

//URL地址中。可以通过 :参数名的形式，匹配动态参数值
app.get("/par/:name/:age",(req,res)=>{

    //里面存放着通过 :动态匹配到的参数值
    res.send(req.params+"\n"+req.params.name+'\n'+req.params.age)

})
//监听post请求
app.post("/post",(req,res)=>{

    //调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({message:"响应Post请求"})

})
//监听put请求
app.put("/put",(req,res)=>{

    //调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({message:"响应Put请求"})

})


app.use(function(req,res,next){

    console.log("调用第一个全局中间件！")
    next()
})

app.use(function(req,res,next){

    console.log("调用第二个全局中间件！")
    next()
})


//调用listen启动服务器
app.listen(9999,()=>{

    console.log("服务器启动 --> http://127.0.0.1:9999")

})

