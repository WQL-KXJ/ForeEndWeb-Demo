<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <h1>当前求和放大10倍为：{{$store.getters.BigSum}}</h1>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
        <button @click="domes">链条调用</button>
    </div>
</template>

<script>
export default {
    name : "Count",
    data(){
        return{
            number : 1
        }
    },
    methods:{
        increment(){
            //调用store的Actions里的方法
            this.$store.dispatch("jia",this.number)
        },
        decrement(){
            this.$store.dispatch("jian",this.number)
        },
        incrementOdd(){
            this.$store.dispatch("jiaOdd",this.number)
        },
        incrementWait(){
            this.$store.dispatch("jiaWait",this.number)
        },
        domes(){
            this.$store.dispatch("dome1")
        }
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }

</style>
