<template>
  <div class="userHeader">
    <div class="back-box" @click="back()">
      <div class="icon-box">
        <img src="../../../assets/icon/向左箭头2.png">
      </div>
      <span>返回</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      back() {
        this.$router.back();
      }
    }
  }
</script>

<style lang="scss">
  .userHeader {
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
  }
</style>
