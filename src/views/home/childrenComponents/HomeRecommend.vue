<template>
    <div id="home-recommend">
        <a v-for="item in recommend" :key="item.sort" :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
</template>

<script>
 export default {
   name: '',
   props: {
       recommend: {
           type: Array,
           default() {
               return []
           }
       }
   },
   components: {

   }
 }
</script>

<style scoped>
#home-recommend {
    display: flex;
    width: 100%;
    /* height: 350px; */
    overflow: hidden;
    /* box-shadow: inset 0 1px 1px #000; */
}
a {
    flex: 1;
    text-align: center;
}
img {
    width: 20vw;
    height: 20vw;
}
 
</style>
