<template>
    <div class="hurdleaLeft">
        <div class="hurdleLeft-th"></div>
        <div class="hurdleLeft-body"></div>
    </div>
</template>
<script>
export default {
    name: 'hurdleaLeft'
}
</script>
<style scoped lang="scss">
  .hurdleaLeft {
      width: 100%;
      background-color: crimson;
      opacity: 0.8;
       .hurdleLeft-th {
        width: 180px;
        height: 60px;
        border-radius: 20px;
        margin: 10px auto;
        background-color: chocolate;
      }
      .hurdleLeft-body {
        width: 100%;
        background-color: cornsilk;
      }
  }
</style>