<template>
  <div class="message">
    <statu-bar></statu-bar>
    <home-header :title="'消息'">
      <div class="search-box" slot="right" @click="handleSearchPop()">
        <img src="../../../assets/icon/search.png">
      </div>
    </home-header>
    <div class="message-container">
    </div>
    <mt-popup class="searchPop"
              v-model="showSearchPop"
              position="right"
              :modal="false"
              popup-transition="popup-slide">
      <search-pop @hideSearchPop="hideSearchPop" v-touch:tap="tapHandle"></search-pop>
    </mt-popup>
  </div>
</template>
<script>
  import homeHeader from '../components/homeHeader.vue'
  import searchPop from '../components/searchPop.vue'

  export default {
    components: {
      homeHeader,
      searchPop,
    },
    data() {
      return {
        showSearchPop: false,
      }
    },
    methods: {
      handleSearchPop() {
        this.showSearchPop = true;
      },
      hideSearchPop() {
        this.showSearchPop = false;
      },
      tapHandle(event, start, end) {
      }
    }
  }
</script>

<style lang="scss">
  .message {
    height: calc(100% - 55px);
    overflow-y: scroll;
    .searchPop {
      transition: .5s ease-out;
    }
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
