const express = require('express') 
const cors = require('cors')

const app = express()
//导入cors跨域问题
app.use(cors())

//导入解析表单json的内置中间件
app.use(express.json())

//导入并配置session中间件
const session = require('express-session')

app.use(session({
    secret:"hello wql-kxj",
    resave: false,
    saveUninitialized: true
}))

app.post('/login',(req,res)=>{

    //判断用户提交的信息是否正确
    if(req.body.username!=='admin' || req.body.password !== '11111'){

        return res.send({status:1,msg:'登录失败！'})
    }

    //将用户的信息存储到session中
    req.session.user = req.body
    //将用户的登录状态存储到session中
    req.session.islogin = true

    res.send({status:0,msg:'登录成功！'})
})

//获取用户信息的接口
app.get("/api/user",(req,res)=>{
    //判断用户是否已登录
    if(!req.session.islogin){

       return res.send({status:1,msg:'登录失败！请先进行登录'})
    }

    res.send({status:0,msg:'已登录！',username: req.session.username,password: req.session.password})

})

//推出登录的接口
app.post('/logout',(req,res)=>{

    //清空当前客户端对应的session信息
    req.session.destroy()
    res.send({status:0,msg:'退出登录成功'})
})

app.listen(9999,()=>{

    console.log("服务器启动: http://127.0.0.1:9999")

})






