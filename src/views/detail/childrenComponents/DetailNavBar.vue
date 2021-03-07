<template>
    <div id="detail-nav-bar">
        <nav-bar>
            <template #left>
                <div @click="goBack" class="circle-back">
                    <span class="back-page"></span>
                </div>
            </template>

            <template #center>
                <ul class="messages">
                    <li v-for="(item, index) in messages" 
                        :key="index"
                        @click="navTextClick(index)"
                        :class="{active: currentIndex===index}"
                        >{{item}}</li>
                </ul>
            </template>
        </nav-bar>
    </div>
</template>

<script>
import navBar from 'components/common/navBar/navBar'


 export default {
   name: '',
   components: {
       navBar
   },
   data() {
       return {
           messages: ['商品', '参数', '评论', '推荐'],
           currentIndex: 0
       }
   },
   methods: {
       goBack() {
       this.$router.back()
     },
     navTextClick(index) {
         this.currentIndex = index
         this.$emit('navTextClick', index)
     }
   }
 }
</script>

<style scoped>
#detail-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 44px;
    z-index: 9;
    background-color: #fff;
}
.circle-back {
    /* display: inline-block; */
    width: 35px;
    height: 35px;
    margin: 5px 0px 0px 10px;
    background-color: rgb(219, 219, 219);
    border-radius: 50% 50%;
}

.back-page {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 10px 0 0 12px;
    transform: rotate(-45deg);
    border-left: 1px solid rgb(116, 116, 116);
    border-top: 1px solid rgb(116, 116, 116);
}

ul.messages {
    display: flex;
    /* justify-content: space-around; */
    line-height: 44px;
    text-align: center;
    font-size: 14px;
}

li {
    flex: 1;
}

.active {
    color: var(--color-tint);
}

 
</style>
