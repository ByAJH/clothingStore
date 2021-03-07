<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'

 export default {
   name: '',
   components: {

   },
   data() {
       return {
           scroll: null,
           
           
       }
   },
   props: {
       probeType:{
           type: Number,
           default: 1
       },
       pullUpLoad: {
           type: Boolean,
           default: false
       }
   },
   methods: {
       refresh() {
        //    console.log('refresh')
           this.scroll && this.scroll.refresh()
       },
       finishPullUp() {
           this.scroll && this.scroll.finishPullUp()
       },
       scrollTo(x, y, time=300) {
           this.scroll && this.scroll.scrollTo(x, y, time)
       }
   }
   ,
   mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            click: true
       })
       this.scroll.on("scroll", (position) => {
           this.$emit('scroll', position)

           this.$bus.$emit('scroll', position)
       })
    //    console.log(this.scroll)
       this.scroll.on("pullingUp" ,() => {
           
           setTimeout(() => {
               this.finishPullUp()
           }, 500);
           this.$emit('pulling-up')
           this.refresh()
           
       })
   }
 }
</script>

<style scoped>
.wrapper {
    /* position: fixed;
    top: 44px;
    bottom: 50px; */
    /* height: calc(100vh - 94px); */
    width: 100%;
    /* height: 500px; */
    /* overflow: hidden; */
}
 
</style>
