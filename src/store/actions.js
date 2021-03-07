import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
    addList(context, payLoad) {
        if(context.state.cartLists.length < 1) context.commit('changeIsAllCheckedTrue')

        let oldProduct = context.state.cartLists.find(item => item.iid === payLoad.iid)
        if(oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
        }else{
            context.commit(ADD_TO_CART, payLoad)
        }
    },
    changeChecked(context, payLoad) {
        context.commit('changeIsChecked', payLoad)
        if(context.state.cartLists.every(list => list.isChecked)) {
            context.commit('changeIsAllCheckedTrue')
        }else {
            context.commit('changeIsAllCheckedFalse')
        }
    },
    changeAllChecked(context, payLoad) {
        if(context.state.cartLists.length < 1) return
        context.commit('changeIsAllChecked')
        if(context.state.isAllChecked) {
            context.state.cartLists.forEach((list, index) => {
                context.commit('changeIsCheckedTrue', index)
            })
        }else {
            context.state.cartLists.forEach((list, index) => {
                context.commit('changeIsCheckedFalse', index)
            })
        }
    }
}