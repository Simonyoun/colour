<template>
    <div class="hurdleRight">
        <div>
            <router-link to="/">1</router-link>
        </div>
        <div>
            <router-link to="/hurdletype">2</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'hurdleRight'
}
</script>
<style scoped lang="scss">
  .hurdleRight {
      width: 100%;
      height: 100%;
      background-color: cyan;
  }
</style>