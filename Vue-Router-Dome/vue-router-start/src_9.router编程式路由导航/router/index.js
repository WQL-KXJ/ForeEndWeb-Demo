//导入vue-router
import VueRouter from "vue-router";

//导入需要跳转路由的组件
import About from '../page/About'
import Home from '../page/Home'

//导入Home子组件
import News from '../components/news'
import Message from '../components/message'

//导入detial子子组件
import Detial from '../components/detial'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name:'detial',
                            path: 'detial/:id/:title',
                            component: Detial
                        }
                    ]
                },
            ]
        }
    ]
})