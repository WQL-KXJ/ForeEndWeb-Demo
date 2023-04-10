<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!--跳转路由并携带params参数，to的字符串写法-->
                <!-- <router-link :to="`/home/message/detial/${m.id}/${m.title}`">{{ m.title }}</router-link> -->

                <!--跳转路由并携带params参数，to的对象写法-->
                <router-link :to="{
                    name:'detial',
                    params:{
                        id:m.id,
                        title:m.title
                    }
                }"
                >{{ m.title }}</router-link>
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
    components: { router }
}
</script>