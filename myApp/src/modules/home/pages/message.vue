<template>
  <div class="message">
    <statu-bar></statu-bar>
    <home-header :title="'消息'">
      <div class="search-box" slot="right">
        <img src="../../../assets/icon/search.png">
      </div>
    </home-header>
    <div class="message-container">
    </div>
  </div>
</template>
<script>
  import homeHeader from '../components/homeHeader.vue'

  export default {
    components: {
      homeHeader
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .message {
    height: calc(100% - 55px);
    overflow-y: scroll;
    .search-box {
      display: flex;
      align-items: center;
      margin-right: 0.2rem;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .message-container {
      min-height: calc(100% - 20px);
    }
  }
</style>
