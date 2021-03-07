<template>
    <div class="shop-info">
        <div class="services">
            <div class="service" v-for="(service, index) in shopInfo.services" :key="index" >
                <img :src="service.icon" alt="" class="service-icon" v-if="service.icon">
                <span v-else class="v-else service-icon"></span>
                <span class="service-name">{{service.name}}</span>
            </div>
        </div>
        <div class="shop-info-d">
            <div class="shop">
                <img :src="shopInfo.logo" alt="" class="shop-logo">
                <span class="shop-name">{{shopInfo.name}}</span>
            </div>
            <div class="goods-info">
                <div class="goods-nums-info">
                    <div class="goods-sells">
                        <div class="nums">{{shopInfo.sellNums}}</div>
                        <div class="msg">总销量</div>
                    </div>
                    <div class="goods-nums">
                        <div class="nums">{{shopInfo.goodsNums}}</div>
                        <div class="msg">总销量</div>
                    </div>
                </div>
                <div class="goods-scores">
                    <ul class="score" v-for="(score, index) in shopInfo.score" :key="index">
                        <li class="score-name">{{score.name}}</li>
                        <li :class="[score.isBetter?'is-better':'not-is-better', 'score-nums']" >{{score.score}}</li>
                        <li :class="[score.isBetter?'text-is-better':'text-not-is-better', 'score-is-better']">{{score.isBetter?'高':'低'}}</li>
                    </ul>
                </div>
            </div>
            <div class="enter-shop">
                <a :href="shopInfo.url">进店逛逛</a>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
   name: 'ShopInfo',
   components: {

   },
   props: {
       shopInfo: {
           type: Object,
           default() {
               return {}
           }
       }
   }
 }
</script>

<style scoped>
.services {
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    margin: 20px 5px;
    height: 35px;
    border-bottom: 3px solid rgb(218, 218, 218);
}
.service {
    position: relative;
    /* flex: 1; */
    font-size: 12px;
    /* text-align: center; */
}
img.service-icon {
    width: 10px;
    /* height: 10px; */
    vertical-align: top;
}
.v-else {
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid rgb(219, 219, 219);
} 
.shop-logo {
    width: 50px;
}
.shop {
    position: relative;
}
.shop-name {
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translate(0, -50%);
}
.goods-info {
    display: flex;
    font-size: 14px;
}
.goods-nums-info {
    display: flex;
    flex: 1;
    text-align: center;
    border-right: 2px solid rgb(228, 228, 228);
    margin: 20px 0;
}
.goods-sells {
    flex: 1;
}
.goods-nums {
    flex: 1;
}
.nums {
    padding: 20px 0 10px 0;
}
.goods-scores {
    flex: 1;
}
.score {
    position: relative;
    margin: 20px 0;
    font-size: 14px;
}
.score li {
    /* float: left; */
    position: absolute;
    /* right: 10px; */
    margin-left: 10px;
}
.score li.score-nums {
    left: 80px;
}
.score li.score-is-better {
    left: 130px;
    color: white;
}
.score::after{
    content: "."; 
    clear: both; 
    visibility: hidden; 
}
.enter-shop {
    height: 20px;
    width: 120px;
    margin: 0 50%;
    /* margin-bottom: 40px; */
    transform: translate(-50%, 0);
    color: rgb(168, 168, 168);
    font-size: 14px;
    text-align: center;
    line-height: 18px;
    border-radius: 10px;
    border: 1px solid rgb(114, 114, 114);
    background-color: rgb(243, 243, 243);

}

.shop-info-d {
    padding-bottom: 30px;
    border-bottom: 3px solid rgb(228, 228, 228);
}

.is-better {
    color: red;
}
.not-is-better {
    color: green;
}
.text-is-better {
    background-color: red;
}
.text-not-is-better {
    background-color: green;
}
</style>
