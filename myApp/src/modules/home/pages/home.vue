<template>
  <div class="home">
    <div class="home-container" ref="container">
      <statu-bar></statu-bar>
      <home-header>
        <div class="search-box" slot="right" @click="handleSearchPop()">
          <img src="../../../assets/icon/search.png">
        </div>
      </home-header>
      <div class="home-tabbar">
        <mt-tabbar v-model="active">
          <mt-tab-item id="0">
            热门
          </mt-tab-item>
          <mt-tab-item id="1">
            树洞
          </mt-tab-item>
          <mt-tab-item id="2">
            专题
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <div class="home-tab" :class="isTop?'m40':''">
        <div class="home-tab-container">
          <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
            <mt-tab-container-item id="0">
              <mt-loadmore :top-method="loadTop" @translate-change="translateChange"
                           @top-status-change="handleTopChange"
                           :bottom-method="loadBottom" @bottom-status-change="handleBottomChange"
                           :bottom-all-loaded="allLoaded"
                           ref="loadmore">
                <activity :datalist="list"></activity>
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
            <mt-tab-container-item id="1">
              <secret v-for="(item,index) in 10" :key="index"></secret>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <subject></subject>
              <subject></subject>
              <subject></subject>
              <subject></subject>
            </mt-tab-container-item>
          </mt-tab-container>
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
  import VueTouch from 'vue-touch'
  import searchPop from '../components/searchPop.vue'
  import activity from '../components/activity.vue'
  import homeHeader from '../components/homeHeader.vue'
  import secret from '../components/secret.vue'
  import subject from '../components/subject.vue'

  export default {
    components: {
      homeHeader,
      searchPop,
      activity,
      secret,
      subject
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
          if (lastValue < 30) {
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
          for (let i = 1; i <= 20; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
      handleSearchPop() {
        this.showSearchPop = true;
      },
      hideSearchPop() {
        this.showSearchPop = false;
      },
      tapHandle(event, start, end) {
      }
    },
    watch: {},
    mounted() {
      let that = this;
      (function (doc) {
        let tab = document.querySelector('.home-tabbar');
        let tabOffsetTop = tab.offsetTop;
        doc.addEventListener('scroll', function () {
          if (doc.scrollTop >= tabOffsetTop - 20) {
            tab.classList.add('fixed');
            that.isTop = true;
          } else {
            tab.classList.remove('fixed');
            that.isTop = false;
          }
        });
      })(document.querySelector('.home-container'));
    },
    created() {
      for (let i = 1; i <= 10; i++) {
        this.list.push(i);
      }
    },
  }
</script>

<style lang="scss">
  .m40 {
    margin-top: 40px;
  }

  .home {
    height: calc(100% - 55px);
    .searchPop {
      transition: .5s ease-out;
    }
    .home-tabbar {
      width: 100%;
    }
    .home-container {
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
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

      .mint-tabbar > .mint-tab-item.is-selected {
        background-color: #fa729a;
        color: white;
      }
      .home-tab {
        min-height: calc(100% - 57px);
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
        padding-top: 10px;
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
      .mint-tab-container-item {
        min-height: calc(100vh - 57px - 55px);
      }
      /*---------------------------------*/
      .home-tab-container {
        .loading-background, .mint-loadmore-top span {
          color: #fa729a;
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
