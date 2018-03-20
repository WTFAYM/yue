<!--客服页面-->
<template>
  <div class="CS">
    <statu-bar></statu-bar>
    <detail-header :title="'客服小范'"></detail-header>
    <div class="CS-container" ref="csContainer">
      <dialog-item v-for="(item,index) in dialogData" :data="item"></dialog-item>
    </div>
    <div class="CS-inputBox">
      <div class="CS-input">
        <mt-field placeholder="输入咨询内容" v-model="text"></mt-field>
      </div>
      <div class="CS-send" ripple="ripple" @click="send()">
        <img src="../../../assets/icon/send.png">
      </div>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import dialogItem from '../components/dialog.vue'

  export default {
    components: {
      dialogItem
    },
    data() {
      return {
        text: '',
        dialogData: []
      }
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
      send() {
        let that = this;
        if (this.text == '') {
          Toast({
            message: '不能发送空内容哦～～',
            duration: 1500,
            className: 'CSToast'
          })
        } else {
          this.dialogData.push({
            text: this.text,
            avatar: '',
            self: true
          });
          setTimeout(() => {
            this.$refs.csContainer.scrollTop = this.$refs.csContainer.scrollHeight
          }, 0);
          this.$axios({
            url: 'http://www.tuling123.com/openapi/api',
            method: 'post',
            data: {
              'key': 'a7c164d6200c4dca9793117efcd453bf',
              'info': this.text,
              'userid': '1'
            },
            withCredentials: true
          }).then(function (response) {
            that.dialogData.push({
              text: response.data.text,
              self: false
            });
            setTimeout(() => {
              that.$refs.csContainer.scrollTop = that.$refs.csContainer.scrollHeight
            }, 0);
          });
          this.text = "";
        }
      }
    },
    created() {
      this.dialogData = [
        {
          text: '您好，这里是机器人小范，有什么可以帮到您？',
          avatar: '',
          self: false
        },
      ]
    }
  }
</script>

<style lang="scss">
  .CS {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .CS-container {
      height: calc(100% - 40px - 50px);
      overflow: scroll;
    }
    .CS-inputBox {
      height: 50px;
      border-top: 1px solid #ccc;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      .CS-input {
        width: calc(100% - 50px);
      }
      .CS-send {
        width: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  .CSToast {
    width: 90%;
    border-radius: 20px;
    top: 120px !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }
</style>
