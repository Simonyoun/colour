<template>
  <div id="app" ref="app">
     <div class="logo">
        webcolor
     </div>
     <div class="body"></div>
  </div>
</template>
<script>
export default {
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
    left: 10%;
    width: 80%;
    height: 1000px;
    background-color: aquamarine;
    opacity: 0.6;
  }
}
</style>
