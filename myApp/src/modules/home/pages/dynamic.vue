<template>
  <div class="dynamic">
    <statu-bar></statu-bar>
    <home-header :title="'动态'">
      <div class="search-box" slot="right">
        <img src="../../../assets/icon/search.png">
      </div>
    </home-header>
    <div class="dynamic-container">

    </div>
    hi dynamic
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
  .dynamic {
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
    .dynamic-container {
      min-height: calc(100% - 40px);
    }
  }
</style>
