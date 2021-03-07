import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
    [ADD_COUNTER](state, payLoad) {
        payLoad.count++
    },

    [ADD_TO_CART](state, payLoad) {
        payLoad.count = 1
        state.cartLists.push(payLoad)
    },

    changeIsChecked(state, payLoad) {
        // console.log(state.cartLists[payLoad])
        state.cartLists[payLoad].isChecked = !state.cartLists[payLoad].isChecked
    },
    changeIsCheckedTrue(state, payLoad) {
        // console.log(state.cartLists[payLoad])
        state.cartLists[payLoad].isChecked = true
    },
    changeIsCheckedFalse(state, payLoad) {
        // console.log(state.cartLists[payLoad])
        state.cartLists[payLoad].isChecked = false
    },

    changeIsAllChecked(state, payLoad) {
        state.isAllChecked = !state.isAllChecked
    },
    changeIsAllCheckedTrue(state, payLoad) {
        // console.log(state.cartLists[payLoad])
        state.isAllChecked = true
    },
    changeIsAllCheckedFalse(state, payLoad) {
        // console.log(state.cartLists[payLoad])
        state.isAllChecked = false
    },
}