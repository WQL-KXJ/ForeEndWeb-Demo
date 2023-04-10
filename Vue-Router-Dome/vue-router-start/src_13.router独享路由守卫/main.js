import Vue from 'vue'
import App from './App.vue'

//导入vue-router
import VueRouter from 'vue-router'

//引入router
import router from './router'

//使用VueRouter插件
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //使用路由
  router:router
}).$mount('#app')
