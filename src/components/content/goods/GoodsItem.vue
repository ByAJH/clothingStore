<template>
    <div class="goods-item" @click="detail">
        <!-- <a href="#"> -->
            <img :src="showImg" alt="">
            <div class="message">
                <p>{{item.title}}</p>
                <span class="price">{{item.price}}</span>
                <span class="cfav">{{item.cfav}}</span>
            </div>
        <!-- </a> -->
    </div>
</template>

<script>

// import { getDetailData } from 'network/detail' 

 export default {
   name: '',
   components: {

   },
   data() {
       return {
           detailData: null
       }
   },
   props: [ 
            'item',    
        ],
    methods: {
        detail() {
            // this.$router.push('/detail?iid=' + this.item.iid)
            this.$router.push('/detail/' + this.item.iid)
            // getDetailData(this.$route.params.iid).then(data => {
            // // console.log(data)
            // this.detailData = data
        // })
        },
        
    },
   computed: {
       showImg() {
           return this.item.image || this.item.show.img
       }
   }
 }
</script>

<style scoped>
.goods-item {
    position: relative;
    padding-bottom: 44px;
    /* flex: 1; */
    width: 48VW;
    font-size: 12px;
    text-align: center;
}

.goods-item img {
    width: 100%;
    border-radius: 5px;
}

.message {
    position: absolute;
    bottom: 15px;
    width: 100%;
}

p {
    /* font-size: 12px; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}

.price {
    color: var(--color-tint);
    margin-right: 20px;
}

.cfav {
    position: relative;
}

.cfav::before {
    content: '';
    position: absolute;
    /* display: inline-block; */
    top: -1px;
    left: -14px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg");
    background-size: 14px 14px;
}


 
</style>
