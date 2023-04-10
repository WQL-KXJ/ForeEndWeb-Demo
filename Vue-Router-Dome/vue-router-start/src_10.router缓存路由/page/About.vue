<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: "about",
    mounted() {
        console.log("About组件被绑定");
    },
    beforeDestroy() {
        console.log("About组件被销毁")
        console.log(this)
  }
}
</script>