import Vue from 'vue'
import App from './App.vue'
//引入store,不加文件名默认导入store目录下的index
import store from './store'

Vue.config.productionTip = false

//使用store
Vue.use(store)

const vm = new Vue({
  render: h => h(App),
  //对象名和对象值一致触发简写形式
  store
}).$mount('#app')

console.log(vm)