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

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phone: '',
        password: '',
        phoneState: 'success',
        passwordState: 'success',
        showPwd: false,
      }
    },
    methods: {
      back() {
        this.$router.back();
      },
      forgot() {
        this.$router.push({name: 'forget'});
      },
      register() {
        this.$router.push({name: 'register'})
      },
      login() {

      }
    }
  }
</script>

<style lang="scss">
  .forgot {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .forgot-header {
      background-color: #fa729a;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
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
      height: calc(100% - 50px);
      overflow: hidden;
      position: relative;
    }
    .login_pic {
      position: absolute;
      left: 0;
      bottom: -85px;
      img {
        max-width: 100%;
      }
    }
  }
</style>
