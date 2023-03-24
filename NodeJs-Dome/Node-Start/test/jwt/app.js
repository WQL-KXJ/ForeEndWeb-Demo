const express = require('express') 
//导入用于生成JWT字符串的包
const jwt = require('jsonwebtoken')
//导入用于将客户端发送过来的JWT字符串,解析还原成JSON对象的模块
const expressJWT = require('express-jwt')

const app = express()

//secret密钥的本质：就是一个字符串
const secretKey = 'wql-kxj *--*'

//调用jwt.sign()生成JWT字符串，三个参数分别是：用户信息对象、加密密钥、配置对象
const tokenstr = jwt.sign({username:"wql-kxj"},secretKey,{expiresIn:'1h'})

app.use(expressJWT({secret: secretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))

app.post('/api/login',function(req,res){

    //用户登录成功之后，生成JWT字符串，通过token属性响应给客户端
    res.send({
        status:200,
        message:"登录成功",
        //token信息
        token: tokenstr
    })
})

//需要权限的API接口
app.get("/admin/getinfo",function(req,res){

    //使用req.user获取用户信息，并使用data属性将用户信息发送给客户端
    console.log(req.user)

    res.send({
        status: 200,
        mes: "获取用户信息成功",
        data: req.user
    })
})

app.use((err,req,res,next)=>{
    //token解析失败导致的错误
    if(err.name === 'UnauthorizedError'){
        return res.send({status:401,message:'无效的token'})
    }
    //其他原因导致的错误
    res.send({status:401,message:'未知错误'})

})

app.listen(9999,()=>{

    console.log("服务器启动: http://127.0.0.1:9999")

})





