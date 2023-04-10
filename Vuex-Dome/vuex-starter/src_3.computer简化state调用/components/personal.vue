<template>
    <div>
        <h2>姓名: {{name}}</h2>
        <h2>个人网站: {{personalwebsite}}</h2>
        <h2>GitHub: {{github}}</h2>
    </div>
</template>

<script>
export default {
    name : "Count",
    computed:{
        name(){
            return this.$store.state.name
        },
        personalwebsite(){
            return this.$store.state.personalwebsite
        },
        github(){
            return this.$store.state.github
        }
    }
}


</script>

<style>
    button{
        margin-left: 5px;
    }

</style>
