<template>
    <div>
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="myclick">点击弹出学校名</button>
      </div>
</template>

<script>
  export default school = Vue.extend({
      methods:{
        myclick(){
          alert(this.schoolName)
        }
      },
      data(){
        return{
          schoolName:"符文学院",
          address:"符文之地"
          }
      }
  })

</script>

<style>
  .root{
    background-color: orange;
  }
</style>