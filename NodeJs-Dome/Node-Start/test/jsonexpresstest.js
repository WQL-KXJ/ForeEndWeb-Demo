const express = require("express")

const json = require("body-parse")

const app = express()

//注意：除了错误级别的中间件，其他中间件，必须在路由之前进行配置
//通过express.json()这个中间件，解析表单中的JSON格式的数据
app.use(json.urlencoded({extended: false}))

app.post("/user",(req,res)=>{

    /**
     * 1.在服务器，可用使用req.bod属性，来接收客户端发送过来的请求体数据
     * 2.默认情况下，如果不配置解析表达中间件，则req.body默认等于underfined
      **/
    console.log(req.body)
    res.send("nice")
})

app.listen(8888,()=>{

    console.log("服务器启动：http://127.0.0.1:8888")
})