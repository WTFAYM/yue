<template>
  <div class="userPop" style="width: 65vw;height: 100vh">
    <div class="userPop-top">
      <div class="imgBox" @click="jumpToUser()">
        <img src="../../../assets/img/01.jpg">
      </div>
      <div class="userInfo">
        <div class="userBase">
          <span @click="jumpToUser()">WTFAYM</span>
        </div>
        <div class="userValue">
          <span>信用值：</span><span>100</span>
        </div>
      </div>
    </div>
    <div class="userPop-content">
      <div class="userPop-menuItem" ripple="ripple">
        <div class="userPop-menuItem-icon">
          <img src="../../../assets/icon/首页.png">
        </div>
        <div class="userPop-menuItem-title">
          <span>首页</span>
        </div>
      </div>
      <div class="userPop-menuItem" ripple="ripple">
        <div class="userPop-menuItem-icon">
          <img src="../../../assets/icon/历史记录.png">
        </div>
        <div class="userPop-menuItem-title">
          <span>历史记录</span>
        </div>
      </div>
      <div class="userPop-menuItem" ripple="ripple">
        <div class="userPop-menuItem-icon">
          <img src="../../../assets/icon/我的关注.png">
        </div>
        <div class="userPop-menuItem-title">
          <span>我的关注</span>
        </div>
      </div>
      <div class="userPop-menuItem" ripple="ripple">
        <div class="userPop-menuItem-icon">
          <img src="../../../assets/icon/客服.png">
        </div>
        <div class="userPop-menuItem-title">
          <span>客服</span>
        </div>
      </div>
    </div>
    <div class="userPop-bottom">
      <div class="userPop-bottom-item" ripple="ripple">
        <div class="userPop-bottom-item-icon">
          <img src="../../../assets/icon/设置.png">
        </div>
        <div class="userPop-bottom-item-name">
          <span>设置</span>
        </div>
      </div>
      <div class="userPop-bottom-item" ripple="ripple">
        <div class="userPop-bottom-item-icon">
          <img src="../../../assets/icon/主题.png">
        </div>
        <div class="userPop-bottom-item-name">
          <span>主题</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      height: 0,
      userInfo: null,
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
    },
    methods: {
      jumpToUser() {
        if (this.$store.state.userInfo) {
          this.$router.push({name: 'user_info'});
        } else {
          this.$router.push({name: 'login'});
        }
      }
    },
    created() {

    }
  }
</script>

<style lang="scss">
  .userPop {
    color: white;
    overflow-y: scroll;
    .userPop-top {
      width: 100%;
      padding: 10px 0;
      position: relative;
      background: #fa729a;
      .imgBox {
        display: inline-block;
        margin-top: 30px;
        margin-left: 20px;
        width: 70px;
        height: 70px;
        border-radius: 35px;
        overflow: hidden;
        border: 1px solid #fff;
        img {
          width: 70px;
          height: 70px;
        }
      }
      .userInfo {
        padding-left: 20px;
        .userBase {
        }
        .userValue {
          span {
            font-size: 12px;
          }
        }
      }
    }
    .userPop-content {
      width: 100%;
      padding: 10px 0;
    }
    .userPop-menuItem {
      color: black;
      display: flex;
      align-items: center;
      vertical-align: middle;
      padding: 10px 0 10px 25px;
      margin: 10px 0;
      &:active {
        background: rgba(250, 114, 154, 0.2);
      }
      .userPop-menuItem-icon {
        display: inline-block;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .userPop-menuItem-title {
        display: inline-block;
        margin-left: 20px;
        span {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    .userPop-bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 55px;
      border-top: 1px solid #fa729a;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
    .userPop-bottom-item {
      display: flex;
      height: 100%;
      flex: 1;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: black;
      &:active {
        background: rgba(250, 114, 154, 0.2);
      }
      .userPop-bottom-item-icon {
        img {
          width: 24px;
          height: 24px;
        }
      }
      .userPop-bottom-item-name {
        padding-left: 5px;
      }
    }
  }
</style>
