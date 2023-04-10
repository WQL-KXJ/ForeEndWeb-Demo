<template>
    <div>
        <ul>
            <h1 :style="{ opacity }">Vue-Router进行渐变!</h1>
            <li>news001 <input type="text" /></li>
            <li>news002 <input type="text" /></li>
            <li>news003 <input type="text" /></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "news",
    data() {
        return {
            opacity: 1
        }
    },
    activated(){
        this.trim = setInterval(() => {
            console.log("定时器！")
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16)
    },
    deactivated(){
        console.log("清空定时器！")
        clearInterval(this.trim)
    },
    beforeDestroy() {
        console.log("news组件销毁")
    }
}
</script>