<template>
  <div class="dynamic">
    <statu-bar></statu-bar>
    <home-header :title="'动态'">
      <div class="search-box" slot="right" @click="handleDynamicPop()">
        <img src="../../../assets/icon/edit.png">
      </div>
    </home-header>
    <div class="dynamic-container">
      <dy-item></dy-item>
      <dy-item></dy-item>
      <dy-item></dy-item>
      <dy-item></dy-item>
    </div>
    <mt-popup class="searchPop"
              v-model="showDynamicPop"
              position="right"
              :modal="false"
              popup-transition="popup-slide">
      <dynamic-pop @hideDynamicPop="hideDynamicPop"></dynamic-pop>
    </mt-popup>
  </div>
</template>
<script>
  import homeHeader from '../components/homeHeader.vue'
  import dyItem from '../components/dyItem.vue'
  import dynamicPop from '../../dynamic/pages/dynamicPop.vue'

  export default {
    components: {
      homeHeader,
      dynamicPop,
      dyItem,
    },
    data() {
      return {
        showDynamicPop: false,
      }
    },
    methods: {
      handleDynamicPop() {
        this.showDynamicPop = true;
      },
      hideDynamicPop() {
        this.showDynamicPop = false;
      },
    }
  }
</script>

<style lang="scss">
  .dynamic {
    height: calc(100% - 55px);
    overflow-y: scroll;
    .searchPop {
      transition: .3s ease-out;
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
    .dynamic-container {
      min-height: calc(100% - 20px);
    }
  }
</style>
