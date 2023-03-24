
const express = require("express")

//导入中间件
const qs = require("./zdymidd")

const app = express()

//解析表单中间件
app.use(qs)

app.post("/post",(req,res)=>{

    res.send(req.body)
})

app.listen(8999,()=>{

    console.log("服务器启动：http://127.0.0.1:8999")

})

