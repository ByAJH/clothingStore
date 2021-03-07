<template>
    <div class="tab-bar">
        <slot> </slot>
    </div>
</template>

<script>

export default {
   name: 'tabBar',
   components: {
   },
   data() {
       return {
       }
   },
   methods: {

   }
   
 }
</script>

<style scoped>
    .tab-bar {
        display: flex;
        width: 100%;
        height: 50px;  
        background-color: var(--color-background);
    }
</style>
