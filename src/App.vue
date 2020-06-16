<template>
  <div id="app" ref="app">
     <div class="logo">
        webcolor
     </div>
     <div class="body">
       <hurdle-Left class="hurdle-Left"></hurdle-Left>
       <hurdle-Right class="hurdle-Right"></hurdle-Right>
     </div>
  </div>
</template>
<script>
import  hurdleLeft  from "@/views/hurdleLeft"
import  hurdleRight  from "@/views/hurdleRight"
export default {
    name: 'App',
    components: {
      hurdleLeft,
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
  .logo {
    width: 100%;
    height: 400px;
    background-color: #000000;
    color: cornsilk;
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
      width: 200px;
      height: 100%;
      float: left;
    }
    .hurdle-Right {
      width: calc(100% - 200px);
      height: 100%;
      float: right;
    }
  }
}
</style>
