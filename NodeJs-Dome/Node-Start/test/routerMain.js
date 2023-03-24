const express = require("express")

const app = express()

//1.导入路由模块
const router = require("./routerTest")

//2.注册路由模块
app.use(router)

app.listen(9999,()=>{

    console.log("启动服务器(模块化路由): http://127.0.0.1:9999")

})

