<template>
  <div class="forgot">
    <statu-bar></statu-bar>
    <div class="forgot-header">
      <div class="back-box" @click="back()">
        <div class="icon-box">
          <img src="../../../assets/icon/向左箭头2.png">
        </div>
        <span>返回</span>
      </div>
      <div class="forget-box">
      </div>
    </div>
    <div class="forgot-container">
      <div class="form-box">
        <div class="inputItem">
          <div class="inputItem-icon">
            <img src="../../../assets/icon/user4.png">
          </div>
          <div class="inputItem-input">
            <mt-field placeholder="请输入手机号" type="tel" :state="phoneState" v-model="phone"
                      :attr="{ maxlength: 11}"></mt-field>
          </div>
        </div>
        <div class="inputItem">
          <div class="inputItem-icon">
            <img src="../../../assets/icon/password.png">
          </div>
          <div class="inputItem-input" id="password">
            <mt-field :class="showPwd?'showPwd':'hidePwd'" placeholder="请输入8-16位密码" state="success"
                      type="password" v-model="password"
                      :attr="{ maxlength: 16}"></mt-field>
          </div>
        </div>
        <div class="inputItem">
          <div class="inputItem-icon">
            <img src="../../../assets/icon/password.png">
          </div>
          <div class="inputItem-input" id="secPassword">
            <mt-field :class="secShowPwd?'showPwd':'hidePwd'" placeholder="请再次输入密码" state="success"
                      type="password" v-model="secPassword"
                      :attr="{ maxlength: 16}"></mt-field>
          </div>
        </div>
        <div class="inputItem identify">
          <div v-if="showIdentify" class="identify-btn" @click="getIdentify()">获取验证码</div>
          <div v-else class="identify-btn count">{{count}}s</div>
          <div class="inputItem-input">
            <mt-field placeholder="请输入验证码"
                      type="tel" v-model="identify"
                      :attr="{ maxlength: 4}"></mt-field>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <mt-button size="normal" ripple="ripple" @click="forgot()">重置密码</mt-button>
      </div>
      <div class="login_pic">
        <img src="../../../assets/img/login_pic1.png">
      </div>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import {MessageBox} from 'mint-ui';

  export default {
    data() {
      return {
        phone: '',
        phoneState: '',
        password: '',
        secPassword: '',
        showPwd: false,
        secShowPwd: false,
        identify: '',
        count: '',
        showIdentify: true
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
      let pwd = document.getElementById('password')
      let pwdIcon = pwd.getElementsByClassName('mintui-field-success')[0];
      let pwdInput = pwd.getElementsByClassName('mint-field-core')[0];
      let secPwd = document.getElementById('secPassword');
      let secPwdIcon = secPwd.getElementsByClassName('mintui-field-success')[0];
      let secPwdInput = secPwd.getElementsByClassName('mint-field-core')[0];
      let that = this;
      pwdIcon.addEventListener('click', function () {
        if (that.showPwd) {
          that.showPwd = false;
          pwdInput.type = 'password';
        } else {
          that.showPwd = true;
          pwdInput.type = 'text';
        }
      });
      secPwdIcon.addEventListener('click', function () {
        if (that.secShowPwd) {
          that.secShowPwd = false;
          secPwdInput.type = 'password';
        } else {
          that.secShowPwd = true;
          secPwdInput.type = 'text';
        }
      });
    },
    methods: {
      back() {
        this.$router.replace({name: 'login'});
      },
      forgot() {
//        表单验证
        MessageBox({
          title: '成功',
          message: '重置密码成功,请重新登录！',
          confirmButtonClass: 'forgot-conBtn'
        }).then(action => {
          this.$router.replace({name: 'login'});
        });
      },
      getIdentify() {
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.showIdentify = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.showIdentify = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }
    }
  }
</script>

<style lang="scss">
  .forgot-conBtn {
    color: #fa729a;
    &:active {
      color: #ccc;
    }
  }

  .forgot {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .forgot-header {
      background-color: #fa729a;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      padding: 0 10px;
    }
    .back-box {
      display: flex;
      align-items: center;
      padding: 5px;
      span {
        color: white;
        margin-left: 2px;
      }
      .icon-box {
        width: 20px;
        height: 20px;
        position: relative;
        overflow: hidden;
        img {
          width: 40px;
          height: 40px;
          position: absolute;
          left: -50%;
          top: -50%;
        }
      }
    }
    .forget-box {
      display: flex;
      align-items: center;
      span {
        color: white;
      }
    }
    .forgot-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: hidden;
      .form-box {
        padding-top: 20%;
      }
      .login_pic {
        position: absolute;
        left: 0;
        bottom: -85px;
        z-index: -1;
        img {
          max-width: 100%;
        }
      }
      .inputItem {
        margin: 10px 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        .inputItem-icon {
          width: .6rem;
          height: .6rem;
          img {
            width: .6rem;
            height: .6rem;
          }
        }
        .inputItem-input {
          padding-left: 10px;
          width: 4.2rem;
          input {
            letter-spacing: 1px;
          }
          .mintui-field-success {
            display: block;
          }
          .showPwd {
            .mint-field-state .mintui-field-success {
              &:before {
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                background: url('../../../assets/icon/showPwd.png') no-repeat;
                background-position: center;
                background-size: 22px 22px;
              }
            }
          }
          .hidePwd {
            .mint-field-state .mintui-field-success {
              &:before {
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                background: url('../../../assets/icon/hidePwd.png') no-repeat;
                background-position: center -5px;
                background-size: 22px 22px;
              }
            }
          }
          .mint-cell-wrapper {
            background: none;
          }
          .mint-field {
            background: none;
            border-bottom: 1px solid #fa729a;
          }
          .mint-field-state {
            margin-top: 2px;
            margin-left: 5px;
          }
        }
      }
      .identify {
        .identify-btn {
          width: 2rem;
          text-align: center;
          padding: 5px 0;
          background-color: #fa729a;
          color: white;
          margin-right: 5px;
        }
        .count {
          background-color: #ccc;
        }
        .inputItem-input {
          width: 2.6rem;
          input {
            text-indent: 2px;
          }
        }
      }
      .btn-box {
        margin-top: 25px;
        display: flex;
        justify-content: center;
        .mint-button:not(.is-disabled):active::after {
          opacity: 0;
        }
        .mint-button {
          width: 3.8rem;
          margin: 0 5px;
          &:active {
            background: inherit;
          }
        }
      }
    }
  }
</style>
