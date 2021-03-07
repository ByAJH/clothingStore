<template>
    <div id="home">
      <home-nav-bar/>
      <tab-control 
                  :tabs="['流行', '新款', '精选']" 
                  @tab-click="tabClick($event)" 
                  :class="[isFixed ? 'fixed':'no-fixed']"/>
      <b-scroll ref="bscroll"
                class="home-wrapper"
                :probeType="3"
                :pullUpLoad="true"
                @scroll="scroll($event)"
                @pulling-up="pullUp"> 
        <home-spiwer :banner="banner" @swiper-img-loaded="swiperImgLoaded" />
        <home-recommend :recommend="recommend"/>
        <home-feature-view/>
        <tab-control 
                  :tabs="['流行', '新款', '精选']" 
                  @tab-click="tabClick($event)"
                  ref="tabControl"/>
        <goods :goods-list="goods[currentGoodsType].list"/>
      </b-scroll>
      <click-to-top @click.native="clickToTop" v-if="showClickToTop"/>
    </div>
    
</template>

<script>
import BScroll from 'components/common/bscroll/BScroll'

import TabControl from 'components/content/tabControl/TabControl.vue'
import Goods from 'components/content/goods/Goods.vue'
import ClickToTop from 'components/content/clicktotop/ClickToTop.vue'

import homeNavBar from 'views/home/childrenComponents/homeNavBar'
import homeSpiwer from 'views/home/childrenComponents/homeSpiwer'
import HomeRecommend from 'views/home/childrenComponents/HomeRecommend.vue'
import HomeFeatureView from 'views/home/childrenComponents/HomeFeatureView.vue'

import { getHomeMultiData } from 'network/home.js'
import { getHomeGoodsData } from 'network/home.js'

import { clickToTop } from 'common/mixin'

 export default {
    name: 'home',
    components: {
      BScroll,

      Goods,

      homeSpiwer,
      homeNavBar,
      HomeRecommend,
      HomeFeatureView,
      TabControl,
      ClickToTop,
    },
    mixins: [clickToTop],
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentGoodsType: 'pop',

        

        isFixed: false,

        tabOffsetTop: 0
      }
    },
    methods: {
      //请求goods数据
      getHomeGoods(type) {
          this.goods[type].page++
          getHomeGoodsData(type, this.goods[type].page).then(res => {
            // console.log(res)  
            this.goods[type].list.push(...res.data.data.list)
          })
      },

      // //点击滚动到顶部
      // clickToTop() {
      //   this.$refs.bscroll.scrollTo(0, 0)
      // },

      //侦查滚动位置
      scroll(event) {
        if(event.y < -450) this.showClickToTop = true
        else this.showClickToTop = false

        if(event.y < -this.tabOffsetTop+44) {
          this.isFixed = true
          // this.$refs.tabControl.$el.style.top = this.tabOffsetTop + 'px'
        }else {
          this.isFixed = false
        }
        
      } ,
      //
      //上拉加载更多
      pullUp() {
        console.log('pullingup')
        this.getHomeGoods(this.currentGoodsType)
      }, 

      //监听tabclick改变currentGoodsType
      tabClick(index) {
        switch(index) {
          case 0:  
              this.currentGoodsType = 'pop'
              break
          case 1: 
              this.currentGoodsType = 'new'
              break
          case 2: 
              this.currentGoodsType = 'sell'
              break
        }
        setTimeout(() => {
          this.$refs.bscroll.refresh()
          // console.log(this.$refs.bscroll.scroll.scrollerHeight)
        }, 200);
        
      },


      swiperImgLoaded() {
            this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      }
    } ,
    created() {
      //获得轮播图、推荐信息等数据
      getHomeMultiData().then(res => {
        // console.log(res)
       this.banner = res.data.data.banner.list
       this.recommend = res.data.data.recommend.list
     })

      //获得商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
   },
   mounted(){
     
   }
 }
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  padding-top: 44px;
}

.fixed {

  position: fixed;
  top: 44px;
  z-index: 9;
}
.no-fixed {
  display: none;
}
.home-wrapper {
  position: fixed;
  top: 44px;
  /* padding: 10px 0; */
  bottom: 50px;
  /* height: calc(100vh - 134px); */
}
 
</style>