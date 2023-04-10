<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="JIA(number)">+</button>
        <button @click="JIAN(number)">-</button>
        <button @click="JIAODD(number)">当前求和为奇数再加</button>
        <button @click="JIAWAIT(number)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions,mapMutations } from 'vuex'
export default {
    name : "Count",
    data(){
        return{
            number : 1
        }
    },
    methods:{
        ...mapActions({increment:"jia",decrement:"jian",incrementOdd:"jiaOdd",incrementWait:"jiaWait"}),
        ...mapMutations(['JIA','JIAN','JIAODD','JIAWAIT'])
        
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }

</style>
