<template>
    <ul>
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{title}}</li>
    </ul>

</template>

<script>
    export default{
        name:"detial",
        data(){
            return{

            }
        },
        mounted(){
            console.log(this.$route)
        },
        props:['id','title']
    }

</script>

<style>

</style>