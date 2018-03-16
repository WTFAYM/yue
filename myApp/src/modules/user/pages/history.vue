<template>
  <div class="history">
    <statu-bar></statu-bar>
    <detail-header :title="'历史记录'"></detail-header>
    <div class="history-container">
      <div class="history-tab">
        <mt-tabbar v-model="tabIndex">
          <mt-tab-item id="0">
            我的发布
          </mt-tab-item>
          <mt-tab-item id="1">
            我的参与
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <div class="history-tab-container">
        <mt-tab-container v-model="tabIndex" swipeable>
          <mt-tab-container-item id="0">
            <active-item v-for="(item,index) in 10" :key="index"></active-item>
          </mt-tab-container-item>
          <mt-tab-container-item id="1">
            <active-item v-for="(item,index) in 10" :key="index"></active-item>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<script>
  import activeItem from '../components/activeItem.vue'

  export default {
    components: {
      activeItem
    },
    data() {
      return {
        tabIndex: '0'
      }
    },
    created() {

    }
  }
</script>

<style lang="scss">
  .history {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .history-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: hidden;
    }
    .history-tab {
      .mint-tabbar > .mint-tab-item.is-selected {
        background-color: #fa729a;
        color: white;
      }
      .mint-tabbar {
        position: relative;
        background-color: #fa729a;
        background-size: 100% 0;
        .mint-tab-item {
          padding: 10px 0;
        }
        .mint-tab-item-label {
          font-size: 14px;
        }
        a {
          color: white;
        }
        .is-selected {
          background-color: #fa729a;
          color: white;
          &:after {
            content: "";
            width: 50%;
            margin: 0 auto;
            height: 3px;
            border-radius: 3px;
            box-shadow: 1px 0;
            display: block;
            top: 10px;
            position: relative;
            background-color: #fff;
          }
        }
      }
      .mint-tab-item-label {
        font-size: 16px;
        padding: 5px 0;
      }
    }
    .mint-tab-container-item {
      overflow: scroll;
    }
    .history-tab-container {
      height: calc(100% - 47px);
      min-height: calc(100% - 47px);
      overflow: scroll;
      .mint-tab-container {
        height: 100%;
      }
      .mint-tab-container-wrap {
        height: 100%;
      }
    }
  }
</style>
