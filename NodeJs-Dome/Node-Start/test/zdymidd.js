//导入出来querystring的Node.js内置模块
const qs = require("querystring")

//解析中间件
const bodyParse = (req,res,next)=>{
    //定义中间件业务逻辑
    //1.定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str=''
    //2.监听req的data事件
    req.on('data',(chunk)=>{

        str += chunk
    })

    //3.监听req的end事件
    req.on('end',()=>{
        //在str中存放的完整的请求头数据
        console.log(str)
        //TODO：把字符串格式的请求头数据，解析成对象格式
        const body = qs.parse(str)
        //将解析出来的请求头对象，挂载为req.body属性
        req.body =body
        next()
    })
}

//导出
module.exports = bodyParse
