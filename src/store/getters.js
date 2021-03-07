export default {
    totolPrice(state) {
        return state.cartLists.filter(item => item.isChecked).reduce((pre, curr) => pre + Number(curr.price)*curr.count, 0).toFixed(2)
    },
    cartListLength(state) {
        return state.cartLists.length
    }
}