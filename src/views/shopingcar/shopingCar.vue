<template>
    <div id="cart">
      <cart-nav-bar/>
      <b-scroll :pullUpLoad="true" class="cart-wrapper">
        <div class="easy"></div>
        <cart-goods-item v-for="(item, index) in $store.state.cartLists" :key="index" :item="item" @changeChecked="changeChecked(index)"></cart-goods-item>
        <div class="easy"></div>
      </b-scroll>
      <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import BScroll from 'components/common/bscroll/BScroll'

import cartNavBar from 'views/shopingcar/childrenComponents/cartNavBar'
import CartGoodsItem from 'views/shopingcar/childrenComponents/CartGoodsItem'
import CartBottomBar from 'views/shopingcar/childrenComponents/CartBottomBar'




 export default {
   name: 'shopingCar',
   components: {
     cartNavBar,
     CartGoodsItem,
     CartBottomBar,
      BScroll
   },
   methods: {
     changeChecked(index) {
       this.$store.dispatch('changeChecked', index)
     }
   }
 }
</script>

<style scoped>
#cart {
  overflow: hidden;
  padding: 44px 0 90px 0;
  height: 100vh;
}
.cart-wrapper {
  position: fixed;
  top: 44px;
  /* padding: 10px 0; */
  bottom: 90px;
  /* height: calc(100vh - 134px); */
}
.easy {
  height: 1px;
}
</style>