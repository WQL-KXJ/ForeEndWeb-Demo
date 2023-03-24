const fs = require("fs")

console.log("当前路径："+__dirname)

fs.readFile(__dirname+"/file/wql1.txt",'utf8',function(err,dateStr){

        if(err){
             console.log("文件读取失败！")
            }
        console.log(dateStr)
    })


// fs.writeFile("./file/wql1.txt","动态清零的四大核心：\n1.溯源\n2.检测\n3.隔离封控\n4.转运","utf8",function(err){

//     if(err){
//         console.log("文件读取失败！")
//     }

//     console.log("文件读取成功！")

// })



 