<template>
  <div class="classify">
    <statu-bar></statu-bar>
    <home-header :title="'分区'">
      <div class="search-box" slot="right" @click="handleSearchPop()">
        <img src="../../../assets/icon/search.png">
      </div>
    </home-header>
    <div class="classify-container">
      <app-swipe></app-swipe>
      <!--<div v-for="item in 100">{{item}}</div>-->
      <div class="classify-title">
        分类标签：
      </div>
      <div class="classify-box">
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/跑步.png">
          </div>
          <div class="classify-item-bottom">
            <span>跑步</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/舞蹈2.png">
          </div>
          <div class="classify-item-bottom">
            <span>舞蹈</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/自行车.png">
          </div>
          <div class="classify-item-bottom">
            <span>自行车</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/摄影旅行.png">
          </div>
          <div class="classify-item-bottom">
            <span>摄影</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/音乐.png">
          </div>
          <div class="classify-item-bottom">
            <span>音乐</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/阅读.png">
          </div>
          <div class="classify-item-bottom">
            <span>阅读</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/篮球.png">
          </div>
          <div class="classify-item-bottom">
            <span>篮球</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/足球.png">
          </div>
          <div class="classify-item-bottom">
            <span>足球</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/网球.png">
          </div>
          <div class="classify-item-bottom">
            <span>网球</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/羽毛球.png">
          </div>
          <div class="classify-item-bottom ">
            <span>羽毛球</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/滑板.png">
          </div>
          <div class="classify-item-bottom">
            <span>滑板</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/滑冰鞋.png">
          </div>
          <div class="classify-item-bottom">
            <span>轮滑</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/游戏.png">
          </div>
          <div class="classify-item-bottom">
            <span>游戏</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/社团活动.png">
          </div>
          <div class="classify-item-bottom">
            <span>社团</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/work.png">
          </div>
          <div class="classify-item-bottom">
            <span>兼职</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/比赛.png">
          </div>
          <div class="classify-item-bottom">
            <span>比赛</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/公益中心.png">
          </div>
          <div class="classify-item-bottom">
            <span>公益</span>
          </div>
        </div>
        <div class="classify-item">
          <div class="classify-item-top">
            <img src="../../../assets/classify/其他.png">
          </div>
          <div class="classify-item-bottom">
            <span>其他</span>
          </div>
        </div>

      </div>
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
    },
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
    .classify-container {
      min-height: calc(100% - 20px);
    }
    .classify-title {
      color: #fa729a;
      padding: 5px 10px;
    }
    .classify-box {
      display: flex;
      flex-wrap: wrap;
    }
    .classify-item {
      width: calc(33% - 20px);
      margin: 10px 10px;
      .classify-item-top {
        width: 1rem;
        height: 1rem;
        margin: 0 auto;
        img {
          max-width: 100%;
        }
      }
      .classify-item-bottom {
        margin-top: 10px;
        text-align: center;
        span {
          letter-spacing: .1rem;
          text-indent: .1rem;
          display: inline-block;
          color: #fa729a;
        }
      }
    }
  }
</style>
