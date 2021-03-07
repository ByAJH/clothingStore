<template>
    <div class="detail-info">
        <h4 class="desc">{{detailInfo.desc}}</h4>
        <h5 class="title">{{detailInfo.title}}</h5>
        <img v-for="(image, index) in detailInfo.images" :key="index" :src="image" alt="" @load="detailImgLoad">
    </div>
</template>

<script>
 export default {
   name: 'DetailDetailInfo',
   components: {

   },
   props: {
       detailInfo: {
           type: Object,
           default() {
               return {}
           }
       }
   },
   methods: {
       detailImgLoad() {
           this.$emit('detailImgLoad')
       }
   }
 }
</script>

<style scoped>
.detail-info {
    padding: 10px 0;
    border-bottom: 3px solid rgb(243, 243, 243);
}
img {
    width: 100%;
}
 
</style>
