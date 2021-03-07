<template>
    <div id="cart-bottom-bar">
        <div class="left">
            <span :class="[$store.state.isAllChecked ? 'all-checked':'not-all-checked', 'is-all-checked']" @click="allChecked"></span>
            <span class="checked-text">全选</span>
        </div>
        <div class="right">
            去付款({{$store.getters.totolPrice}})
        </div>
    </div>
</template>

<script>
 export default {
   name: 'CartBottomBar',
   components: {

   },
   methods: {
       allChecked() {
           this.$store.dispatch('changeAllChecked')
       }
   }
 }
</script>

<style scoped>
#cart-bottom-bar {
    display: flex;
    position: fixed;
    bottom: 50px;
    width: 100%;
    height: 40px;
    background-color: rgb(201, 44, 44);
}
.left {
    position: relative;
    flex: 4;
    background-color: rgb(209, 209, 209);
}
.right {
    flex: 3;
    text-align: center;
    line-height: 40px;
    color: white;
}
.is-all-checked {
    display: inline-block;
    margin: 10px;
    width: 20px;
    height: 20px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 10px;
    background: url('~assets/img/cart/tick.svg') 1px 2px no-repeat;
    
}
.all-checked {
    background-color: rgb(172, 30, 30);
}
.not-all-checked {
    background-color: rgb(255, 255, 255);
}
.checked-text {
    position: absolute;
    height: 20px;
    line-height: 40px;
}
</style>
