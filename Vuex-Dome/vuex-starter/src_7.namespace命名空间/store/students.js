//students类别的命名空间
export default{//向外暴露
    namespaced:true,//开启命名空间
    state:{
        students: [
            {"name":'暗裔剑魔',class:"易大师一班"},
            {"name":'虚空行者',class:"易大师一班"},
            {"name":'德玛西亚皇子',class:"易大师一班"},
            {"name":'发条精灵',class:"易大师一班"}
        ],
        StuentNumber:0
    },
    actions:{
        addstudent(context,value){
            context.commit('ADDstudent',{"name":value,class:"易大师一班"})
        }
    },
    mutations:{
        ADDstudent(state,value){
            state.students.unshift(value)
        },
        ComputStuentNumber(state){
            state.StuentNumber = state.students.length
        }
    }
}