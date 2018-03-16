<template>
  <div class="follow-page">
    <statu-bar></statu-bar>
    <detail-header :title="'关注'"></detail-header>
    <div class="follow-container">
      <div class="follow-tab">
        <mt-tabbar v-model="tabIndex">
          <mt-tab-item id="0">
            我的关注
          </mt-tab-item>
          <mt-tab-item id="1">
            我的粉丝
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <div class="follow-tab-container">
        <mt-tab-container v-model="tabIndex" swipeable>
          <mt-tab-container-item id="0">
            <follow-item v-for="(item,index) in 15" :key="index"></follow-item>
          </mt-tab-container-item>
          <mt-tab-container-item id="1">
            <follow-item v-for="(item,index) in 15" :key="index" :showBtn="false"></follow-item>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<script>
  import followItem from '../components/followItem.vue'

  export default {
    components: {
      followItem
    },
    data() {
      return {
        tabIndex: '0'
      }
    }
  }
</script>

<style lang="scss">
  .follow-page {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .follow-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: hidden;
    }
    .follow-tab {
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
    .follow-tab-container {
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
