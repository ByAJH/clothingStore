<template>
        <swiper class="img">
            <template #default>
                <swiper-item v-for="(item, index) in detailSwiperData" :key="index">
                    <img :src="item" alt="">
                </swiper-item>
            </template>
        </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

 export default {
   name: '',
   components: {
       Swiper,
       SwiperItem
   },
   props: {
       detailSwiperData: Array,
       default() {
           return []
       }
   },

 }
</script>

<style scoped>
.img {
    height: 300px;
    overflow: hidden;
}
 
</style>
