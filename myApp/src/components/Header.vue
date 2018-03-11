<template>
  <div class="header">
    <mt-header :title="title"></mt-header>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      title: ''
    }
  }
</script>

<style lang="scss">
  .header {
    padding-top: 20px;
    background-color: #fa729a;
    .mint-header {
      background-color: #fa729a;
    }
    .mint-header-title {
      font-size: 16px;
      padding: 5px;
    }
  }
</style>
