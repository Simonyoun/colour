<template>
  <div id="app" ref="app">
     <div class="logo">
        webcolor
     </div>
     <div class="body">
       <div class="hurdle-Left">
         <transition name="hurdle-Left" :duration="1000">
           <router-view></router-view>
         </transition>
       </div>
       <div class="hurdle-Right">
         <hurdle-Right></hurdle-Right>
       </div>
     </div>
  </div>
</template>
<script>
import  hurdleRight  from "@/views/hurdleRight"
export default {
    name: 'App',
    components: {
      hurdleRight
    },
    mounted() {
        var w = document.documentElement.clientWidth || document.body.clientWidth
        this.$refs.app.style.white = w + 'px'
    }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  height: 100vh;
  overflow-y: hidden;
  background-color: #99CCCC ;
  .logo {
    width: 100%;
    height: 400px;
    color: #000000;
    font-size: 120px;
    line-height: 170px;
    font-family: Arial,Helvetica,sans-serif;     
    text-align: center;
  }
  .body {
    position: absolute;
    top: 100px;
    left: 5%;
    right: 5%;
    width: 90%;
    height: calc(100vh - 150px);
    border-radius: 5px;
    clear: both;
    box-shadow: 1px 1px 1px 0.5px #000000;
    .hurdle-Left {
      width: calc(100% - 80px);
      height: 100%;
      float: left;
      position: absolute;
      /* 设置持续时间和动画函数 */
      .hurdle-Left-enter-active {
        transition: all 1s ease;
      }
      .hurdle-Left-leave-active {
        transition: all 2s ease;
      }
      .hurdle-Left-enter {
        transform: translateY(100%);
        opacity: 0;
      }
      .hurdle-Left-leave-to {
        transform: translateX(-120%);
        opacity: 0;
      }
    }
    .hurdle-Right {
      width: 80px;
      height: 100%;
      float: right;
    }
  }
}
</style>
