<template>
<div id="toast" v-show="show">
    <div class="msg">{{message}}</div>
</div>
</template>

<script>
 export default {
   name: '',
   components: {

   },
   data() {
       return {
           show: false,
           message: ''
       }
   },
   methods: {
       showToast(message="加入购物车成功", duration=1000) {
           this.show = true
           this.message = message
           this.easyIO().then(res => {
                setTimeout(() => {
                    // const toast = document.querySelector('#toast')
                    let timer = setInterval(() => {
                        res.style.opacity = Number(res.style.opacity) - 0.1
                        if(res.style.opacity <= 0) {
                            clearInterval(timer)
                            this.show = false
                            this.message = ''              
                        }
                    }, 15);     
                 }, duration)
            })
       },
       easyIO() {
        //    let isIn = true  
            const toast = document.querySelector('#toast')
            return new Promise((resolve, reject) => {
                            toast.style.opacity = 0
                            let timer = setInterval(() => {
                                toast.style.opacity = Number(toast.style.opacity) + 0.1
                                // console.log(toast.style.opacity)
                                if(toast.style.opacity >= 1) {
                                    clearInterval(timer)
                                    toast.style.opacity = 1
                                    // isIn = false
                                    resolve(toast)                 
                                }
                            }, 15);
                        })      
        }
    }
 }
</script>

<style scoped>
#toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 30px;
    background-color: rgb(87, 87, 87);
    color: white;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
    opacity: 1;
    z-index: 9999;
}
 
</style>
