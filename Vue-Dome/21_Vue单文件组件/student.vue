<template>
    <div>
        <h2>学生名称：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
   </div>
</template>

<script>
  export default student = Vue.extend({
      data(){
        return{
            studentName:"瑞兹",
            age:"21"
          }
      }
  })

</script>

<style>

</style>