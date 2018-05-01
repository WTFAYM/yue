<template>
  <div class="classifyPage">
    <statu-bar></statu-bar>
    <detail-header :title="classify"></detail-header>
    <div class="classifyPage-container">
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
    </div>
  </div>
</template>
<script>
  import activity from '../../../modules/home/components/activity.vue'

  export default {
    components: {
      activity
    },
    data() {
      return {
        classify: '',
        allLoaded: false,
        bottomStatus: '',
        topStatus: '',
        translate: 0,
        moveTranslate: 0,
        list: []
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
    },
    created() {
      this.classify = this.$route.params.classify;
      console.log()
      for (let i = 1; i <= 10; i++) {
        this.list.push(i);
      }
    }
  }
</script>

<style lang="scss">
  .classifyPage {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .classifyPage-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: scroll;
    }
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
</style>
