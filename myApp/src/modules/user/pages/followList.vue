<template>
  <div class="follow-page">
    <statu-bar></statu-bar>
    <user-header>
      <span class="follow-title">关注</span>
    </user-header>
  </div>
</template>
<script>
  import userHeader from '../components/userHeader.vue'

  export default {
    components: {
      userHeader,
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .follow-page {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .follow-title {
      color: white;
    }
  }
</style>
