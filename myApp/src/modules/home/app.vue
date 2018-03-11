<template>
  <div class="app-home">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <app-footer></app-footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .app-home {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
