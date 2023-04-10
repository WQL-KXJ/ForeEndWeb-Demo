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
const router = new VueRouter({
    routes: [
        {
            name: "about",
            path: '/about',
            component: About,
            meta: {
                title: "关于",
                isAuth: true
            }
        },
        {
            name: "home",
            path: '/home',
            component: Home,
            meta: {
                title: "主页"
            },
            children: [
                {
                    name: "news",
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: "新闻"
                    }
                },
                {
                    name: "message",
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [
                        {
                            name: 'detial',
                            path: 'detial/:id/:title',
                            component: Detial,
                            meta: {
                                isAuth: true,
                                title: "列表"
                            },
                            beforeEnter: (to, from, next) => {
                                //判断是否需要权限
                                if (to.meta.isAuth) {
                                    if (localStorage.getItem('kxj') === "lala") {
                                        next()
                                    } else {
                                        alert('无权访问')
                                    }
                                } else {
                                    next()
                                }
                            }
                        }
                    ]
                },
            ]
        }
    ]
})

export default router