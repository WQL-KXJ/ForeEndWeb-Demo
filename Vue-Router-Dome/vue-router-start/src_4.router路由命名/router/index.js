//导入vue-router
import VueRouter from "vue-router";

//导入需要跳转路由的组件
import About from '../components/About'
import Home from '../components/Home'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name:'about',
            path: '/about',
            component: About
        },
        {
            name:'home',
            path: '/home',
            component: Home
        }
    ]
})