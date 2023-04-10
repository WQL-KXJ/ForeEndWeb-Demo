//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//引入students命名空间
import students from './students'
//引入teachers命名空间
import teachers from './teachers'
Vue.use(Vuex)



export default new Vuex.Store({
    modules:{
        //注册命名空间
        teachers,
        students
    }
})