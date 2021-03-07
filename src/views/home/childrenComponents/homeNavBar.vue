<template>
    <div id="home-nav-bar">
        <nav-bar>
            <template #left></template>
            <template #center>
                <div class="c">购物街</div>
            </template>
            <template #right></template>
        </nav-bar>
    </div>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

 export default {
   name: 'homeNavBar',
   components: {
       navBar
   }
 }
</script>

<style scoped>
#home-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 44px;
    background-color: var(--color-tint);
    box-shadow: inset 0px -1px 3px rgb(255, 87, 87);
}
.c {
    line-height: 44px;
    text-align: center;
    color: white;
}

</style>
