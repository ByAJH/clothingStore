<template>
  <div class="commonts" v-if="Object.keys(comments).length !== 0">
    <div class="top">
      <span class="left">用户评价</span>
      <a class="right" href="javascript:void(0)">更多</a>
    </div>
    <div class="user">
      <img :src="comments.user.avatar" alt="" class="user-avatar">
      <span class="user-name">{{comments.user.uname}}</span>
    </div>
    <div class="content">
      {{comments.content}}
    </div>
    <div class="msg">
      <!-- <span class="time">{{getDate.toLocaleDateString()}}</span> -->
      <span class="time">{{`${getDate.getFullYear()}年${getDate.getMonth()+1 }月${getDate.getDay()}日`}}</span>
      <span class="style">{{comments.style}}</span>
    </div>
    <div  v-if="Object.keys(comments).indexOf('images') !== -1" >
      <div class="comment-imgs" v-for="(img, index) in comments.images" :key="index">
        <img :src="img" alt="" class="comment-img">
      </div>
    </div>
    
    
  </div>
</template>

<script>
 export default {
   name: '',
   components: {

   },
   props: {
     comments: {
       type: Object,
       default() {
         return {}
       }
     }
   },
   computed: {
     getDate() {
       return new Date(this.comments.created*1000)
     }
   }
 }
</script>

<style scoped>
.commonts {
  margin: 0 10px;
  padding: 20px 0;
}
.top {
  padding: 0 0 10px 0;
  border-bottom: 2px solid rgb(240, 240, 240);
}
.top::after {
  content: '0';
  clear: both;
  visibility: hidden;
}
.user {
  margin: 10px 0;
}
.user-avatar {
  width: 30px;
  vertical-align: middle;
}
.user-name {
  margin-left: 10px;

}
.content {
  font-size: 14px;
}
.msg {
  font-size: 12px;
  margin: 10px 0;
  color: rgb(138, 138, 138);
  /* overflow: hidden; */
}
/* div {
  overflow: hidden;
} */
.style {
  padding-left: 20px;
}
.comment-imgs {
  margin: 10px 10px 20px 0;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 20px;
}
.comment-img {
  height: 100px;
}
</style>
