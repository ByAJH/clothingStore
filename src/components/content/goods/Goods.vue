<template>
    <div class="goods">
        <!-- {{goodsList}} -->
        <!-- <slot></slot> -->
        <goods-item v-for="(item, index) in goodsList" :key="index" 
                    :item="item"
                    
        ></goods-item>
    </div>
</template>

<script>

import GoodsItem from 'components/content/goods/GoodsItem'

 export default {
   name: '',
   components: {
      GoodsItem
   },
   props: {
       goodsList: Array    
   },
   mounted() {
    //    console.log(111,this.goodsList)
   }
   
 }
</script>

<style scoped>
.goods {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* height: 500px; */
    /* width: 100%; */
    margin: 0  0.5vw;
    margin-top: 5px;
    padding-top: 5px;
    border-top: 3px solid rgb(230, 230, 230);
    

}
 
</style>
