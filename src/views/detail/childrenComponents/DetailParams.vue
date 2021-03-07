<template>
    <div id="detail-params">
        <table class="tables">
            <div>
                <tr v-for="(items, index) in itemParamsTables[0]" :key="index" class="table-middle">
                    <td v-for="(item, index) in items" :key="index">{{item}}</td>
                </tr>
            </div>
            
            <tr v-for="(setItem, index) in itemParamsSet" :key="index+10000">
                <td class="set-key">{{setItem.key}}</td>
                <td class="set-value">{{setItem.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
 export default {
   name: '',
   components: {

   },
   data() {
       return {
        //    paramsOffsetTop: 0
       }
   },
   props: {
       itemParamsSet: {
           type: Array,
           default() {
               return []
           }
       },
       itemParamsTables: Array
   },
   computed: {
       table() {
           console.log(this.itemParams.rule.tables)
           return this.itemParams.rule.tables
       }
   },
//    mounted() {
//        this.paramsOffsetTop = document.querySelector('#detail-params').offsetTop
//        console.log(this.paramsOffsetTop)
//    }
 }
</script>

<style scoped>
#detail-params {
    padding: 0 0 20px 0;
    margin: 0 10px;
    border-bottom: 3px solid rgb(240, 240, 240);
}
.tables {
    width: 100%;
    font-size: 14px;
}
.tables tr {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid rgb(240, 240, 240);

}
.tables tr td {
    flex: 1;
    font-size: 14px;
}
.tables tr .set-key {
    flex: 1;
}
.tables tr .set-value {
    flex: 3;
    color: var(--color-tint);
}
.tables div .table-middle:last-child {
    border-bottom: 5px solid rgb(240, 240, 240);
    /* color: red; */
}
 
</style>
