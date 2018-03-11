<template>
  <mt-tabbar v-model="selected" class="footer">
    <mt-tab-item id="0" @click.native="jumpToHome()" ripple="ripple">
      <img slot="icon" :src="loadHomeImg()">
      首页
    </mt-tab-item>
    <mt-tab-item id="1" @click.native="jumpToClassify()" ripple="ripple">
      <img slot="icon" :src="loadClassifyImg()">
      分区
    </mt-tab-item>
    <mt-tab-item id="2" @click.native="jumpToDynamic()" ripple="ripple">
      <img slot="icon" :src="loadDynamicImg()">
      动态
    </mt-tab-item>
    <mt-tab-item id="3" @click.native="jumpToMessage()" ripple="ripple">
      <img slot="icon" :src="loadMessageImg()">
      消息
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  export default {
    data() {
      return {
        selected: 0
      }
    },
    created() {

    },
    activated() {

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
      loadHomeImg() {
        return this.selected == 0 ? require('../assets/icon/home(1).png') : require('../assets/icon/home(0).png');
      },
      loadClassifyImg() {
        return this.selected == 1 ? require('../assets/icon/classify(1).png') : require('../assets/icon/classify(0).png');
      },
      loadDynamicImg() {
        return this.selected == 2 ? require('../assets/icon/dynamic(1).png') : require('../assets/icon/dynamic(0).png');
      },
      loadMessageImg() {
        return this.selected == 3 ? require('../assets/icon/message(1).png') : require('../assets/icon/message(0).png');
      },
      jumpToHome() {
        this.$router.push({name: "home_home"});
      },
      jumpToClassify() {
        this.$router.push({name: "home_classify"});
      },
      jumpToDynamic() {
        this.$router.push({name: "home_dynamic"});
      },
      jumpToMessage() {
        this.$router.push({name: "home_message"});
      }
    }
  }
</script>

<style lang="scss">
  .footer {
    .mint-tab-item-label {
      color: #fa729a;
    }
    .mint-tab-item.is-selected {
      background: #fff;
      color: #fa729a;
    }
  }
</style>
