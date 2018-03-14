<template>
  <div class="addActive">
    <statu-bar></statu-bar>
    <ac-header></ac-header>
    发起活动
  </div>
</template>
<script>
  import acHeader from '../components/acHeader.vue'

  export default {
    components: {
      acHeader
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .addActive {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
  }
</style>
