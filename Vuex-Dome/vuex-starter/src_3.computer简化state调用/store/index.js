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

} 

//创建暴露Store
export default new Vuex.Store({
    //变量名和变量值一致可以触发简写形式
    actions,
    mutations,
    state,
    getters
})