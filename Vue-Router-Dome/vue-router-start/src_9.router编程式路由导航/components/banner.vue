<template>
    <div class="col-xs-offser-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Dome</h2>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <input type="text" placeholder="输入步数(负数后退-正数前进)" v-model="value"  name="输入"/>
            <button @click="go">确认</button>
        </div>
    </div>

</template>

<script>
    export default{
        name:'Banner',
        data(){
            return {
                value:""
            }
        },
        methods:{
            back(){
                this.$router.back()
            },
            forward(){
                this.$router.forward()
            },
            go(){
                this.$router.go(this.value)
            }
        }
    }
</script>