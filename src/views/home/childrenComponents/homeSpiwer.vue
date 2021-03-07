<template>
    <div id="home-spiwer">
        <swiper>
            <template #default>
                <swiper-item v-for="item in banner" :key="item.link">
                    <a :href="item.link">
                        <img :src="item.image"  :title="item.title" @load="swiperImgLoaded">
                    </a>
                </swiper-item>
            </template> 
      </swiper>
    </div>
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
       banner: {
           type: Array
       }
   },
   methods: {
       swiperImgLoaded() {
           this.$emit('swiper-img-loaded')
       }
   }
 }
</script>

<style scoped>
#home-spiwer {
    width: 100%;
    /* padding-top: 44px; */
}
 
</style>
