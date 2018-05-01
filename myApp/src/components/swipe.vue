<template>
  <div class="swipe-box">
    <mt-swipe :auto="2000" :showIndicators="true">
      <mt-swipe-item>
        <img src="../assets/img/01.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/01.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/01.jpg">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .swipe-box {
    width: calc(100% - 20px);
    margin: 10px auto;
    height: 100px;
    .mint-swipe {

    }
    .mint-swipe-indicators {
      bottom: 0;
      left: 80%;
      transform: translateX(0);
      .is-active {
        background: #fff;
      }
    }
    .mint-swipe-indicator {
      background: rgba(0, 0, 0, 0.8);
      opacity: 1;
    }
    .mint-swipe-items-wrap {
    }
    .mint-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
