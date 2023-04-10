//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

//使用Vuex插件
Vue.use(Vuex)

const actions = {}
const mutations = {}
const state = {
    name: "空想家",
    personalwebsite:"https://wql.luoqin.ltd",
    github:"https://github.com/WQL-KXJ"
}

const getters = {
    gitee(state){
        return "https://gitee.com/WQL-KXJ"},
    processon(state){
        return "https://www.processon.com/u/5ea881011e085346f728124f/profile"}
} 

//创建暴露Store
export default new Vuex.Store({
    //变量名和变量值一致可以触发简写形式
    actions,
    mutations,
    state,
    getters
})