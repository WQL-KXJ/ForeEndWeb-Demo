const express = require("express")

//1.创建路由对象
const router = express.Router()

//2.挂载获取用户路由
router.get("/user/:id",function(req,res){

    res.send("Get user list !!"+req.params.id)
})

//3.挂载添加用户路由
router.put("/user",function(req,res){

    res.send("add user list !!")
})

//4.向外导出路由对象
module.exports = router