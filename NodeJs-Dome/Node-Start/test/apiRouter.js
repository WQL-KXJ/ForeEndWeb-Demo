const express = require("express")

const router = express.Router()

//挂载路由,编写get接口
router.get("/user",(req,res)=>{

    res.send({"status": 200,
              "message": "get请求成功",
              "date":"/user 路径访问"})

})

//挂载路由,编写post接口
router.post("/user",(req,res)=>{

    res.send({"status": 200,
              "message": "post请求成功",
              "date":"/user 路径访问"})

})

//挂载路由,编写delete接口
router.delete("/user",(req,res)=>{

    res.send({"status": 200,
              "message": "delete请求成功",
              "date":"/user 路径访问"})

})

module.exports = router