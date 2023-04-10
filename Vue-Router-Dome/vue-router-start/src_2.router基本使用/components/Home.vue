<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: "about",
  mounted() {
    console.log("Home组件被绑定");
  },
  beforeDestroy() {
    console.log("Home组件被销毁")
    console.log(this)
  }
}
</script>