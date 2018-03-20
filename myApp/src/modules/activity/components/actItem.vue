<template>
  <div class="actItem">
    <div class="actItem-top">
      <div class="actItem-user">
        <div class="actItem-user-avatar">
          <img src="../../../assets/img/01.jpg">
        </div>
        <div class="actItem-user-name">WTFAYM</div>
      </div>
      <div class="actItem-time">
        <span>2018-3-12 11:50</span>
      </div>
    </div>
    <div class="actItem-content">
      <div class="actItem-text">
        <p>这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本</p>
      </div>
      <div class="actItem-img">
        <!--这里要用一次遍历-->
        <img src="../../../assets/img/01.jpg">
        <img src="../../../assets/img/01.jpg">
        <img src="../../../assets/img/01.jpg">
        <img src="../../../assets/img/01.jpg">
      </div>
    </div>
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
  .actItem {

  }
</style>
