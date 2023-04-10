<template>
    <div>
        <!--自动获取-->
        <h2>自动获取易大师所带的学生数：{{students.length}}</h2>
        <!--手动获取-->
        <h2>手动易大师所带的学生数：{{StuentNumber}}</h2>
        <button @click="ComputStuentNumber">点击获取人数</button>
    </div>
    
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name : "teachers",
    computed:{
        ...mapState(['StuentNumber','students'])
    },
    methods:{
        ...mapMutations(['ComputStuentNumber'])
    },

}
</script>
<style>

</style>