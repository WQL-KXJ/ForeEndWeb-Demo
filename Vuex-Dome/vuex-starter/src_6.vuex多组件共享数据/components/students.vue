<template>
    <div>
        <h1>学生列表</h1>
        <input type="text" v-model="student" placeholder="请输入名字">
        <button @click="addstudent(student)">添加</button>
        <ul v-for="i,index in students" :key="index">
            <li >{{i.name}} -- {{ i.class }}</li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name : "students",
    data(){
        return {
            student:""
        }
    },
    computed:{
        ...mapState(['students'])
    },
    methods:{
        ...mapActions(['addstudent'])
    }
}

</script>
<style>


</style>
