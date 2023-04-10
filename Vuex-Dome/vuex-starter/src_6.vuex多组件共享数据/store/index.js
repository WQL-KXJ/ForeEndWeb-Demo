//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    addstudent(context,value){
        context.commit('ADDstudent',{"name":value,class:"易大师一班"})
    }
}
const mutations = {
    ADDstudent(state,value){
        state.students.unshift(value)
    },
    ComputStuentNumber(state){
        state.StuentNumber = state.students.length
    }
}
const state = {
    students: [
        {"name":'暗裔剑魔',class:"易大师一班"},
        {"name":'虚空行者',class:"易大师一班"},
        {"name":'德玛西亚皇子',class:"易大师一班"},
        {"name":'发条精灵',class:"易大师一班"}
    ],
    StuentNumber:0
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})