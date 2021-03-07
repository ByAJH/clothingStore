<template>
    <div id="detail-bottom-bar">
        <div class="staff flex-one">
            <!-- <img src="" alt=""> -->
            <div class="staff-img"></div>
            <div class="msg">客服</div>
        </div>
        <div class="shop flex-one">
            <div class="shop-img"></div>
            <div class="msg">店铺</div>
        </div>
        <div class="star flex-one">
            <div class="star-img"></div>
            <div class="msg">收藏</div>
        </div>
        <div class="add-to-cart flex-two" @click="addToCart">加入购物车({{cartListLength>99 ? '99+':cartListLength}})</div>
        <div class="buy flex-two">购买</div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
 export default {
   name: '',
   components: {

   },
   methods: {
       addToCart() {
        //    this.$store.commit('addList', )
        this.$emit('addToCart')
       }
   },
   computed: {
       ...mapGetters(['cartListLength'])
   }
 }
</script>

<style scoped>
#detail-bottom-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100vw;
    z-index: 999;
    background-color: white;
    border-top: 1px solid rgb(235, 235, 235);
    font-size: 14px;
}
.flex-one {
    flex: 1;
    text-align: center;
    background-color: #fff;
}
.flex-two {
    flex: 2;
    line-height: 50px;
    text-align: center;
    /* background-color: var(--color-tint); */
    
}
.flex-one div:first-child{
    height: 30px;
    background-size: 50%;
}

.staff-img {
    background: url('~assets/img/detail/detail_bottom.png') 13px -62px no-repeat;
}
.shop-img {
    background: url('~assets/img/detail/detail_bottom.png') 13px -118px no-repeat;
}
.star-img {
    background: url('~assets/img/detail/detail_bottom.png') 13px 2px no-repeat;
}
.add-to-cart {

    background-color: rgb(253, 255, 110);
}
.buy {
    color: #fff;
    background-color: var(--color-tint);
}
 
</style>
