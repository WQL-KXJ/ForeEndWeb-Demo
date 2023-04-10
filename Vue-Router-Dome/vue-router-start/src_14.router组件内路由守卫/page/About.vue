<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: "about",
    beforeRouteEnter(to, from, next) {
        //判断是否需要权限
        if (to.meta.isAuth) {
            if (localStorage.getItem('kxj') === "lala") {
                next()
            } else {
                alert('无权访问')
            }
        } else {
            next()
        }
    },
    beforeRouteLeave(to, from, next) {
        next()
    }
}
</script>