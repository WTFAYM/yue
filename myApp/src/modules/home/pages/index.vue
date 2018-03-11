<template>
  <div class="home">
    <div class="statusBar"></div>
    <div class="home-container" ref="container">
      <div class="home-header">
        <div class="home-header-top">
          <div class="portrait-box clearfix" @click="handleUserPop()">
            <img class="portrait-box-list" src="../../../assets/icon/list.png">
            <img class="portrait-box-user" src="../../../assets/img/01.jpg">
          </div>
          <div class="search-box" @click="handleSearchPop()">
            <img src="../../../assets/icon/search.png">
          </div>
        </div>
      </div>
      <div class="home-tabbar">
        <mt-tabbar v-model="active">
          <mt-tab-item id="0">
            热门
          </mt-tab-item>
          <mt-tab-item id="1">
            校内
          </mt-tab-item>
          <mt-tab-item id="2">
            校外
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <div class="home-tab">
        <div class="home-tab-container">
          <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
            <mt-tab-container-item id="0">
              <mt-loadmore :top-method="loadTop" @translate-change="translateChange"
                           @top-status-change="handleTopChange"
                           :bottom-method="loadBottom" @bottom-status-change="handleBottomChange"
                           :bottom-all-loaded="allLoaded"
                           ref="loadmore">
                <ul class="page-loadmore-list">
                  <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
                </ul>
                <div slot="top" class="mint-loadmore-top">
                  <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                  <span v-show="topStatus === 'loading'">
                    <mt-spinner type="snake"></mt-spinner>
                </span>
                </div>
                <div v-show="!allLoaded" slot="bottom" class="mint-loadmore-bottom">
                  <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                  <span v-show="bottomStatus === 'loading'">
                    <mt-spinner type="snake"></mt-spinner>
                  </span>
                </div>
                <div v-show="allLoaded" slot="bottom" class="bottomTip">
                  <span class="bottomTip-line"></span><span class="bottomTip-text">我也是有底线的！！</span><span
                  class="bottomTip-line"></span>
                </div>
              </mt-loadmore>
            </mt-tab-container-item>
            <mt-tab-container-item id="1" >
              <!---->
              热门
            </mt-tab-container-item>
            <mt-tab-container-item id="2">

            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
    <mt-popup class="userPop"
              v-model="showUserPop"
              position="left"
              popup-transition="popup-slide">
      <user-pop></user-pop>
    </mt-popup>
    <mt-popup class="searchPop"
              v-model="showSearchPop"
              position="right"
              :modal="false"
              popup-transition="popup-slide">
      <search-pop @hideSearchPop="hideSearchPop"></search-pop>
    </mt-popup>
  </div>
</template>
<script>
  import VueTouch from 'vue-touch'
  import userPop from '../components/userPop.vue'
  import searchPop from '../components/searchPop.vue'

  export default {
    components: {
      userPop,
      searchPop
    },
    data() {
      return {
        active: '0',
        isTop: false,
        list: [],
        allLoaded: false,
        bottomStatus: '',
        topStatus: '',
        translate: 0,
        moveTranslate: 0,
        showUserPop: false,
        showSearchPop: false,
      }
    },
    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 50) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
      handleUserPop() {
        this.showUserPop = true;
      },
      hideUserPop() {
        this.showUserPop = false;
      },
      handleSearchPop() {
        this.showSearchPop = true;
      },
      hideSearchPop() {
        this.showSearchPop = false;
      }
    },
    watch: {},
    mounted() {
    },
    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },
  }
</script>

<style lang="scss">
  .statusBar {
    background-color: #fa729a;
    width: 100%;
    height: 20px;
  }

  .home {
    height: calc(100% - 55px);
    .userPop {
      transition: .5s ease-out;
    }
    .searchPop {

      transition: .5s ease-out;
    }
    /*.home-tabbar {*/
    /**/
    /*}*/
    .home-container {
      height: calc(100% - 20px);
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .home-header {
        background-color: #fa729a;
        .home-header-top {
          height: 50px;
        }
      }
      .home-header-top {
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .portrait-box {
          display: flex;
          vertical-align: middle;
          align-items: center;
          .portrait-box-list {
            width: 20px;
            height: 20px;
            margin-left: -10px;
          }
          .portrait-box-user {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            margin-left: 3px;
            background-color: #ccc;
          }
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
      }

      .mint-tabbar > .mint-tab-item.is-selected {
        background-color: #fa729a;
        color: white;
      }
      .home-tab {
        height: calc(100% - 37px);
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

      .home-tab-container {
        height: 100%;
        .mint-tab-container {
          height: 100%;
        }
        .mint-tab-container-wrap {
          height: 100%;
        }
        .bottomTip {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          .bottomTip-line {
            height: 1px;
            background: #fa729a;
            margin: 0 5px;
            flex-grow: 2;
          }
          .bottomTip-text {
            color: #fa729a;
            font-size: 12px;
            text-align: center;
            flex-grow: 1;
          }
        }
      }
      .scrollY {
        overflow-y: scroll;
      }
      .noScroll {
        overflow-y: hidden;
      }
      /*---------------------------------*/
      .home-tab-container {
        .loading-background, .mint-loadmore-top span {
          -webkit-transition: .2s linear;
          transition: .2s linear
        }

        .mint-loadmore-top span {
          display: inline-block;
          vertical-align: middle
        }

        .mint-loadmore-top span.is-rotate {
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg)
        }

        .page-loadmore .mint-spinner {
          display: inline-block;
          vertical-align: middle
        }

        .page-loadmore-desc {
          text-align: center;
          color: #666;
          padding-bottom: 5px
        }
        .page-loadmore-wrapper {
          overflow: scroll
        }

        .mint-loadmore-bottom span {
          display: inline-block;
          -webkit-transition: .2s linear;
          transition: .2s linear;
          vertical-align: middle
        }

        .mint-loadmore-bottom span.is-rotate {
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg)
        }
      }
    }
  }


</style>
