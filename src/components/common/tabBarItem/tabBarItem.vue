<template>
    <div class="tab-bar-item" @click="change">
        <div class="pic">
            <slot name="pic" v-bind:isActive="isActive"></slot>
        </div>
        <div class="disc" :style="{color: activeColor}">
            <slot name="disc"  ></slot>
        </div>
    </div>
</template>

<script>
 export default {
   name: 'tabBarItem',
   components: {

   },
   props: ["path"],
   data() {
       return {
        //    isActive: false,
        //    path: ''
       }
   },
   methods: {
       change() {
           this.$router.replace(this.path)
        //    console.log(this.$route)
       }
   },
   computed: {
       isActive() {
           return this.$route.path.indexOf(this.path) !== -1
       },
       activeColor() {
           if(this.$route.path.indexOf(this.path) !== -1) {
               return '#ff7a93'
           }else {
               return 'black'
           }
       }
   }
 }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        height: 100%;
    }
    .pic {
        margin: 3px auto;
        height: 25px;
        width: 25px;
    }
    .disc {
        text-align: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>
