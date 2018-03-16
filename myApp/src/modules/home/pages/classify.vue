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
        <div class="classify-item" v-for="(item ,index) in list" :key="index" ripple="ripple">
          <div class="classify-item-top">
            <img :src="loadImg(item.img)">
          </div>
          <div class="classify-item-bottom">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
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
        list: [
          {
            name: '跑步',
            img: 'assets/classify/跑步.png',
            id: 0,
          },
          {
            name: '舞蹈',
            img: 'assets/classify/舞蹈2.png',
            id: 1,
          },
          {
            name: '自行车',
            img: 'assets/classify/自行车.png',
            id: 2,
          },
          {
            name: '摄影',
            img: 'assets/classify/摄影旅行.png',
            id: 3,
          },
          {
            name: '音乐',
            img: 'assets/classify/音乐.png',
            id: 4
          },
          {
            name: '阅读',
            img: 'assets/classify/阅读.png',
            id: 5,
          },
          {
            name: '篮球',
            img: 'assets/classify/篮球.png',
            id: 6,
          },
          {
            name: '足球',
            img: 'assets/classify/足球.png',
            id: 7,
          },
          {
            name: '网球',
            img: 'assets/classify/网球.png',
            id: 8,
          },
          {
            name: '羽毛球',
            img: 'assets/classify/羽毛球.png',
            id: 9,
          },
          {
            name: '滑板',
            img: 'assets/classify/滑板.png',
            id: 10,
          },
          {
            name: '轮滑',
            img: 'assets/classify/滑冰鞋.png',
            id: 11,
          },
          {
            name: '游戏',
            img: 'assets/classify/游戏.png',
            id: 12,
          },
          {
            name: '社团',
            img: 'assets/classify/社团活动.png',
            id: 13
          },
          {
            name: '兼职',
            img: 'assets/classify/work.png',
            id: 14
          },
          {
            name: '比赛',
            img: 'assets/classify/比赛.png',
            id: 15
          },
          {
            name: '公益',
            img: 'assets/classify/公益中心.png',
            id: 16
          },
          {
            name: '其他',
            img: 'assets/classify/其他.png',
            id: 17
          },

        ],
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
      },
      loadImg(url) {
        return require('@/' + url);
      }
    },
    created() {

    },
    mounted() {
      (function () {
        var cleanUp, debounce, i, len, ripple, rippleContainer, ripples, showRipple;
        debounce = function (func, delay) {
          var inDebounce;
          inDebounce = undefined;
          return function () {
            var args, context;
            context = this;
            args = arguments;
            clearTimeout(inDebounce);
            return inDebounce = setTimeout(function () {
              return func.apply(context, args);
            }, delay);
          };
        };

        showRipple = function (e) {
          var pos, ripple, rippler, size, style, x, y;
          ripple = this;
          rippler = document.createElement('span');
          size = ripple.offsetWidth;
          pos = ripple.getBoundingClientRect();
          x = e.pageX - pos.left - (size / 2);
          y = e.pageY - pos.top - (size / 2);
          style = 'top:' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';
          ripple.rippleContainer.appendChild(rippler);
          return rippler.setAttribute('style', style);
        };

        cleanUp = function () {
          while (this.rippleContainer.firstChild) {
            this.rippleContainer.removeChild(this.rippleContainer.firstChild);
          }
        };

        ripples = document.querySelectorAll('[ripple]');
        for (i = 0, len = ripples.length; i < len; i++) {
          ripple = ripples[i];
          rippleContainer = document.createElement('div');
          rippleContainer.className = 'ripple--container';
          ripple.addEventListener('mousedown', showRipple);
          ripple.addEventListener('mouseup', debounce(cleanUp, 2000));
          ripple.rippleContainer = rippleContainer;
          ripple.appendChild(rippleContainer);
        }
      }());
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
      background: white;
    }
    .classify-box {
      display: flex;
      flex-wrap: wrap;
      background: white;
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
