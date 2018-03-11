<template>
  <div class="classify">
    <statu-bar></statu-bar>
    <home-header :title="'分区'">
      <div class="search-box" slot="right">
        <img src="../../../assets/icon/search.png">
      </div>
    </home-header>
    <div class="classify-container">
      <app-swipe></app-swipe>
      <!--<div v-for="item in 100">{{item}}</div>-->
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
    },
    methods: {},
    created() {

    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .classify {
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
    .classify-container {
      min-height: calc(100% - 40px);
      margin-top: 20px;
    }
  }
</style>
