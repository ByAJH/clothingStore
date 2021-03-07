<template>
    <div class="main-tab-bar">
        <tab-bar>
        <tab-bar-item path="/home">
            <template #pic="slotProps">
                <img v-if="slotProps.isActive" src='~assets/img/tabbar/home_active.svg' alt="" >
                <img v-else src='~assets/img/tabbar/home.svg' alt="">
            </template>

            <template #disc>
                <span>home</span>
            </template>
        </tab-bar-item>

        <tab-bar-item path="/category">
            <template #pic="slotProps">
                <!-- <img :src="isActive ? 'assets/img/tabbar/home_active.svg' : ''" alt=""> -->
                <img v-if="slotProps.isActive" src='~assets/img/tabbar/category_active.svg' alt="" >
                <img v-else src='~assets/img/tabbar/category.svg' alt="">
            </template>

            <template #disc>
                <span>category</span>
            </template>
        </tab-bar-item>

        <tab-bar-item path="/shopingcar">
            <template #pic="slotProps">
                <img v-if="slotProps.isActive" src='~assets/img/tabbar/shopcart_active.svg' alt="" >
                <img v-else src='~assets/img/tabbar/shopcart.svg' alt="">
            </template>

            <template #disc>
                <span>shopcart</span>
            </template>
        </tab-bar-item>

        <tab-bar-item path="/profile">
            <template #pic="slotProps">
                <img v-if="slotProps.isActive" src='~assets/img/tabbar/profile_active.svg' alt="" >
                <img v-else src='~assets/img/tabbar/profile.svg' alt="">
            </template>

            <template #disc>
                <span>profile</span>
            </template>
        </tab-bar-item>
        </tab-bar>
        
    </div>
</template>

<script>
import tabBarItem from 'components/common/tabBarItem/tabBarItem.vue'
import tabBar from 'components/common/tabBar/tabBar.vue'
 export default {
   name: '',
   components: {
       tabBar,
       tabBarItem
   }
 }
</script>

<style scoped>
.main-tab-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0px -1px 2px rgb(173, 173, 173);
}

 
</style>
