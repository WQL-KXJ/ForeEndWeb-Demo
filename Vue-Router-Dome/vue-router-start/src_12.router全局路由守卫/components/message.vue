<template>
    <div>
        <ul>
            <li v-for="mes in messageList" :key="mes.id">
                <!--跳转路由并携带params参数，to的字符串写法-->
                <!-- <router-link :to="`/home/message/detial/${m.id}/${m.title}`">{{ m.title }}</router-link> -->

                <!--跳转路由并携带params参数，to的对象写法-->
                <router-link replace :to="{
                    name:'detial',
                    params:{
                        id:mes.id,
                        title:mes.title
                    }
                }">{{ mes.title }}</router-link>
                <button @click="showpush(mes)">push查看</button>
                <button @click="showreplace(mes)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: "message",
    data() {
        return {
            messageList: [
                { id: "001", title: "消息001" },
                { id: "002", title: "消息002" },
                { id: "003", title: "消息003" }
            ]
        };
    },
    methods:{
        showpush(mes){
            //编程式push跳转路由
            this.$router.push({
                name:"detial",
                params:{
                    id:mes.id,
                    title:mes.title
                }
            })

        },
        showreplace(mes){
            //编程式replace跳转路由
            this.$router.replace({
                name:"detial",
                params:{
                    id:mes.id,
                    title:mes.title
                }
            })
        }
    },
    components: { router }
}
</script>