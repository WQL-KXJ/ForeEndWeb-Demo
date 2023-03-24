
function dateformat(datestr){

    //将实参转化为Date格式
    const date = new Date(datestr);

    //获取年月日时
    const y = date.getFullYear()
    const m = padZero(date.getMonth() + 1)
    const d = padZero(date.getDate())
    const hh = padZero(date.getHours())
    const mm = padZero(date.getMinutes())
    const ss = padZero(date.getSeconds())

    return `${y}-${m}-${d}-${hh}-${mm}-${ss}`
}

//补零函数
function padZero(n){

    return n>9 ? n : "0"+n

}

//对外暴露函数
module.exports={
    dateformat
}