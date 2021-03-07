<template>
    <div class="tab-control">
        <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="tabClick(index)" >
            <span :class="{active: index === currentIdex}">{{tab}}</span>
        </div>
    </div>
</template>

<script>
 export default {
   name: '',
   components: {

   },
   data() {
       return {
           currentIdex: 0,
       }
   },
   props: ['tabs'],
   methods: {
       tabClick(index) {
           this.currentIdex = index
           this.$emit('tab-click', index)
       },

   },
   mounted() {
    //    this.$bus.$on('scroll', this.stickTo)
   }
 }
</script>

<style scoped>
.tab-control{
    display: flex;
    width: 100%;
    height: 30px;
    background-color: #fff;
    padding-bottom: 5px;
}
/* .sticky {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;

} */
.tab {
    flex: 1;
    text-align: center;
    /* line-height: 25px; */
}
span {
    display: inline-block;
    padding: 0 3px;
    height: 25px;
    line-height: 25px;
    /* font-size: 14px; */
}
.active {
    border-bottom: 2px solid var(--color-tint);
}
</style>
