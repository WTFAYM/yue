<template>
  <div class="dynamicPop">
    <div class="dyn-statubar"></div>
    <div class="dynamicPop-Header">
      <div class="back-box" @click="closePop()">
        <div class="icon-box">
          <img src="../../../assets/icon/向左箭头2.png">
        </div>
        <span>发布动态</span>
      </div>
    </div>
    <div class="dynamicPop-content">
      <div class="dynamicPop-content-text">
        <mt-field placeholder="分享你的动态" type="textarea" rows="4" v-model="dynamicText"></mt-field>
      </div>
      <div class="dynamicPop-content-img">
        <img v-for="(n,index) in 8" :key="index" src="../../../assets/img/01.jpg">
        <img v-if="imgList.length < 9" src="../../../assets/icon/add.png" @click="addImg()">
      </div>
    </div>
    <div class="dynamicPop-btn">
      <mt-button size="large" @click="push()">发布</mt-button>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';

  export default {
    data() {
      return {
        dynamicText: "",
        imgList: []
      }
    },
    methods: {
      closePop() {
        this.$emit('hideDynamicPop');
      },
      addImg(){
//        添加上传图片
      },
      push() {
        if (this.dynamicText.trim() === '') {
          Toast({
            message: '动态内容不能为空或者纯空格哦！',
            duration: 3000,
            className: 'dynToast'
          });
        }
      }
    },
  }
</script>
<style lang="scss">
  .dynamicPop {
    width: 100vw;
    height: 100vh;
    background: #f6f6f6;
    .dyn-statubar {
      height: 20px;
      background-color: #fa729a;
    }
    .dynamicPop-Header {
      background-color: #fa729a;
      display: flex;
      height: 50px;
      padding: 0 10px;
      align-items: center;
      text-align: center;
      .back-box {
        display: flex;
        padding: 5px;
        align-items: center;
        position: absolute;
        span {
          color: white;
          margin-left: 10px;
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
    }
    .dynamicPop-content {

      .dynamicPop-content-text {
        font-size: 14px;
        .mint-field-core {
          letter-spacing: 1px;
          border-bottom: 1px solid #fa729a;
        }
      }
      .dynamicPop-content-img {
        display: flex;
        margin-top: 10px;
        background: white;
        padding: 0 20px;
        flex-wrap: wrap;
        img {
          width: 1.5rem;
          height: 1.5rem;
          margin: 10px;
        }
      }
    }
    .dynamicPop-btn {
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;
      padding: 0 10px;
      .mint-button--large {
        background: #fa729a;
        color: white;
        &:after {
          background: #ccc;
        }
      }
    }
  }

  .dynToast {
    width: 90%;
    border-radius: 20px;
    top: 100px !important;
    background: rgba(0, 0, 0, 0.5) !important;
    z-index: 10000;
  }
</style>
