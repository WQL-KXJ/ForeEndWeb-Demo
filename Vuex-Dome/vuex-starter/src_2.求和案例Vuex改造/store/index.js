// //引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//使用Vuex插件
Vue.use(Vuex)

//准备actions -- 用于响应组件中的动作
const actions = {
    dome1(context) {
        //调用dome2方法
        context.dispatch("dome2","调用dome2")
    },
    dome2(context,value) {
        console.log(value)
        //调用dome2方法
        context.dispatch("dome3","调用dome3")
    },
    dome3(context,value) {
        console.log(value)
    },
    //加
    jia(context, value) {
        //使用commit交给mutations中的方法处理
        context.commit("JIA", value)
    },
    jian(context, value) {
        context.commit("JIAN", value)
    },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit("JIAODD", value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit("JIAWAIT", value)
        }, 500)
    }
}
//准备mutations -- 用于操作数据(state)
const mutations = {

    JIA(state, value) {
        //实际的处理
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    JIAODD(state, value) {
        state.sum += value
    },
    JIAWAIT(state, value) {
        state.sum += value
    }
}
//准备state -- 用于存储数据
const state = {
    //存储sum数据
    sum: 0
}

const getters = {
    BigSum(state){
        //对sum数据放大十倍
        return state.sum*10
    }

} 

//创建暴露Store
export default new Vuex.Store({
    //变量名和变量值一致可以触发简写形式
    actions,
    mutations,
    state,
    getters
})