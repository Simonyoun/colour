<template>
    <div class="hurdleaLeft">
        <div class="hurdleaLeft-body">
                    <div style="width:100%;height: 500px;"></div>
         <div style="width:100%;height: 500px;"></div>
          <div style="width:100%;height: 500px;"></div>
           <div style="width:100%;height: 500px;"></div>
            <div style="width:100%;height: 500px;"></div>
        </div>
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
      height: 100%;
      overflow: hidden;
      background-color: rgba($color: #EEEEEE , $alpha: 0.6);
      .hurdleaLeft-body{
          width: 100%;
          height: 100%;
          overflow-y: auto;
      }
  }
</style>