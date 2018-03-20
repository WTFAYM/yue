<template>
  <div class="rule">
    <statu-bar></statu-bar>
    <detail-header :title="'返回'"></detail-header>
    <div class="rule-container">
      <h1 class="rule-title">系统使用说明</h1>
      <div class="rule-content">
        <h1> 一、活动参与须知</h1>
        <p>
          1.在活动开始时间后的30分钟内不能报名参加其他活动。
        </p>
        <p>
          2.在活动内容需要符合社会主义核心价值观，不得传递淫秽，三观不正等信息。
        </p>
        <p>
          3.请大家相互监督，好好爱护校园环境。
        </p>
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
  .rule {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .rule-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: scroll;
    }
    .rule-title {
      padding: 10px 0;
      text-align: center;
      background: white;
    }
    .rule-content {
      background: white;
      padding: 10px;
      p {
        padding: 5px 0;
      }
    }
  }
</style>
