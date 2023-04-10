<template>
    <div>
        <h2>姓名: {{name}}</h2>
        <h2>个人网站: {{personalwebsite}}</h2>
        <h2>GitHub: {{github}}</h2>
        <h2>Gitee: {{gitee}}</h2>
        <h2>Processon: {{processon}}</h2>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name : "Count",
    computed:{
        //...表示将对象中的方法展开放入computed中
        ...mapState({name:'name',personalwebsite:"personalwebsite",github:"github"}),
        
        ...mapGetters({gitee:'gitee',processon:'processon'})
    },
}
</script>

<style>
    button{
        margin-left: 5px;
    }

</style>
