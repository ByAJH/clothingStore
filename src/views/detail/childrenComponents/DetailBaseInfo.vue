<template>
<div class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
        <span class="new-price">{{goods.newPrice}}</span>
        <span class="old-price">{{goods.oldPrice}}</span>
        <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-column">
        <span v-for="(item, index) in goods.columns " :key="index">{{item}}</span>
    </div>

</div>
</template>

<script>
 export default {
   name: '',
   components: {

   },
   props: {
       goods: {
           type: Object,
           defautl() {
               return {}
           }
       }
   }
 }
</script>

<style scoped>
.base-info {
    padding: 0 10px;
}
.info-price {
    position: relative;
}
.info-title {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 400;
}
.new-price {
    font-size: 30px;
    color: var(--color-tint);
    margin-right: 10px;
}
.old-price {
    text-decoration: line-through;    
}
.discount {
    /* display: inline-block; */
    position: absolute;
    
    margin-left: 10px;
    padding: 3px 10px;
    font-size: 14px;
    font-weight: 400;
    color: white;
    background-color: var(--color-tint);
    border-radius: 10px;
}
.info-column {
    display: flex;
    margin: 20px 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(230, 230, 230);
}
.info-column > span {
    flex: 1;
}
.info-column > span:nth-child(2) {
    text-align: center;
}
.info-column > span:nth-child(3) {
    text-align: right;
}
</style>
