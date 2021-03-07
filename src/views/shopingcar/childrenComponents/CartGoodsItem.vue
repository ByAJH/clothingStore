<template>
<div class="cart-goods-item">
    <span :class="[item.isChecked ? 'checked':'unchecked']" @click="changeChecked"></span>
    <img :src="item.img" class="goods-img" />
    <div class="desc">
        <div class="title">{{item.title}}</div>
        <div class="price">{{item.price}}</div>
        <div class="num">×{{item.count}}</div>
    </div>
</div>
</template>

<script>
 export default {
   name: 'CartGoodsItem',
   components: {

   },
   data() {
       return {
        //    isChecked: true
       }
   },
   props: {
       item: {
            type: Object,
            default() {
                return {}
            }
        }
   },
   methods: {
       changeChecked() {
           this.$emit('changeChecked')
       }
   }
 }
</script>

<style scoped>
.cart-goods-item {
    position: relative;
    margin: 10px 0px 10px 30px;
    /* padding: 10px 0; */
    width: 335px;
    height: 100px;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 5px;
    
}
.goods-img {
    position: absolute;
    top: 12px;
    left: 5px;
    width: 50px;
    border-radius: 5px;
}
.desc {
    font-size: 14px;
}
.title {
    position: absolute;
    top: 12px;
    left: 70px;
    right: 10px;
    /* width: 270px; */
}
.price {
    position: absolute;
    left: 70px;
    bottom: 12px;
    color: brown;
}
.num {
    position: absolute;
    right: 10px;
    bottom: 12px;
}
span {
    position: absolute;
    top: 50%;
    left: -25px;
    transform: translate(0, -50%);
    width: 20px;
    height: 20px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 10px;
    background: url('~assets/img/cart/tick.svg') 1px 2px no-repeat;
}
.checked {
    background-color: rgb(190, 65, 65);
}
.unchecked {
    background-color: white;
}
</style>
