<template>
<div id="detail">
  <detail-nav-bar @navTextClick="navTextClick" ref="dnavbar"></detail-nav-bar>

  <b-scroll :pullUpLoad="true" :probeType="3" class="detail-wrapper" @scroll="scroll" ref="bscroll">
    <detail-swiper :detail-swiper-data="detailSwiperData"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
    <detail-detail-info :detail-info="detailInfo" @detailImgLoad="detailImgLoad"></detail-detail-info>
    <detail-params ref="params" :item-params-set="itemParamsSet" :item-params-tables="itemParamsTables"></detail-params>
    <detail-comments ref="comments" :comments="comments"></detail-comments>
    <div ref="recommends" class="goods-recommend">推荐商品</div>
    <goods ref="recommends" :goods-list="recommendData">
       
    </goods>
    <!-- {{this.detailData}} -->
  </b-scroll>
  <click-to-top @click.native="clickToTop" v-if="showClickToTop"/>
  <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
</div>
</template>

<script>
import BScroll from 'components/common/bscroll/BScroll'
import Goods from 'components/content/goods/Goods.vue'
import ClickToTop from 'components/content/clicktotop/ClickToTop.vue'

import DetailNavBar from 'views/detail/childrenComponents/DetailNavBar'
import DetailSwiper from 'views/detail/childrenComponents/DetailSwiper'
import DetailBaseInfo from 'views/detail/childrenComponents/DetailBaseInfo'
import DetailShopInfo from 'views/detail/childrenComponents/DetailShopInfo'
import DetailDetailInfo from 'views/detail/childrenComponents/DetailDetailInfo'
import DetailParams from 'views/detail/childrenComponents/DetailParams'
import DetailComments from 'views/detail/childrenComponents/DetailComments'
import DetailBottomBar from 'views/detail/childrenComponents/DetailBottomBar'

import { getDetailData, getRecommendData, GoodsData, ShopInfo, DetailInfo} from 'network/detail' 

import { debounce } from 'common/utils'
import { imgLoadedMixin } from 'common/mixin'
import { clickToTop } from 'common/mixin'



 export default {
   name: 'detail',
   components: {  
      BScroll,
      Goods,

      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailDetailInfo,
      DetailParams,
      DetailComments,
      DetailBottomBar,
      ClickToTop,

   },
   mixins: [imgLoadedMixin, clickToTop],
   data(){
     
    return {
      detailSwiperData: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      itemParamsSet: [],
      itemParamsTables: [],
      comments: {},
      recommendData: [],
      DetailCompTopY: [],
      getDetailCompTopY: null,
      
     }
   },
   created() {
     this.iid = this.$route.params.iid
    //  this.iid = this.$route.query.iid
     getDetailData(this.iid).then(res => {
      //  console.log(9999,res.data)
       let data = res.data.result
       this.detailSwiperData = data.itemInfo.topImages
       this.goods = new GoodsData(data.itemInfo, data.columns, data.shopInfo.services)
       this.shopInfo = new ShopInfo(data.shopInfo)
       this.detailInfo = new DetailInfo(data.detailInfo)
       this.itemParamsSet = data.itemParams.info.set
       this.itemParamsTables = data.itemParams.rule.tables
       if(data.rate.cRate !== 0) {
          this.comments = data.rate.list[0]
       }
     
      //  console.log(this.itemParams)
     });
     getRecommendData().then(res => {
      //  console.log(res)
       this.recommendData = res.data.data.list
      //  console.log(this.recommendData)
     })

     this.getDetailCompTopY = debounce(() => {
       this.DetailCompTopY = []
       this.DetailCompTopY.push(0)
       this.DetailCompTopY.push(this.$refs.params.$el.offsetTop)
       this.DetailCompTopY.push(this.$refs.comments.$el.offsetTop)
       this.DetailCompTopY.push(this.$refs.recommends.$el.offsetTop - 40)
       this.DetailCompTopY.push(Number.MAX_VALUE)

        // console.log(this.DetailCompTopY)
     }, 100)
   },
   
   methods: {
     addToCart() {
       const product = {
         img: this.detailSwiperData[0],
         title: this.goods.title,
         price: this.goods.realPrice,
         iid: this.iid,
         isChecked: true
       }

       this.$store.dispatch('addList', product)

       this.$toast.showToast()
     },
     detailImgLoad() {
       this.imgLoaded()
       this.getDetailCompTopY()
     },
     navTextClick(index) {
      //  console.log(index)
      //  if(this.scrollPositionY >= this.DetailCompTopY[0] && this.scrollPositionY < this.DetailCompTopY[1])
      switch(index) {
        case 0: this.$refs.bscroll.scrollTo(0, 0)
                break
        case 1: this.$refs.bscroll.scrollTo(0, -this.DetailCompTopY[1])
                break
        case 2: this.$refs.bscroll.scrollTo(0, -this.DetailCompTopY[2])
                break
        case 3: this.$refs.bscroll.scrollTo(0, -this.DetailCompTopY[3])
                break
        default: this.$refs.bscroll.scrollTo(0, -this.DetailCompTopY[0])
                 break
      }
       
     },
     scroll(position) {
      //  this.scrollPositionY = position.y
      // console.log(position.y)
      if(position.y < -450) this.showClickToTop = true
      else this.showClickToTop = false

      if(-position.y >= this.DetailCompTopY[0] && -position.y < this.DetailCompTopY[1]) {
        this.$refs.dnavbar.currentIndex = 0
      }else if(-position.y >= this.DetailCompTopY[1] && -position.y < this.DetailCompTopY[2]) {
        this.$refs.dnavbar.currentIndex = 1
      }else if(-position.y >= this.DetailCompTopY[2] && -position.y < this.DetailCompTopY[3]) {
        this.$refs.dnavbar.currentIndex = 2
      }else if(-position.y >= this.DetailCompTopY[3] && -position.y < this.DetailCompTopY[4]) {
        this.$refs.dnavbar.currentIndex = 3
      }
     }
   }
 }
</script>

<style scoped>
#detail {
  position: relative;
  padding-top: 44px;
  padding-bottom: 50px;
  z-index: 1;
  /* width: 100vw; */
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
}
.detail-wrapper {
  position: fixed;
  top: 44px;
  /* padding: 10px 0; */
  bottom: 50px;
  /* height: calc(100vh - 134px); */
}
.goods-recommend {
  text-align: center;
  font-size: 20px;
}
 
</style>
