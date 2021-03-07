<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
 export default {
   name: 'navBar',
   components: {

   }
 }
</script>

<style scoped>
.nav-bar {
    display: flex;
    width: 100%;
    height: 100%;
}
.left {
    width: 60px;
    height: 100%;
}
.right {
    width: 60px;
    height: 100%;
}
.center {
    flex: 1;
    height: 100%;
    

}

</style>
