<template>
  <div class="msgSystem">
    <statu-bar></statu-bar>
    <detail-header :title="'系统通知'"></detail-header>
    <div class="msgSystem-container">
      <div class="msgSystem-item">
        <h1>约跑App更新啦！</h1>
        <p>约跑App要和大家见面了，敬请期待！！！</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    created() {
      this.$store.commit('setMsgPoint', {key: 'showSystemPoint', value: false});
    }
  }
</script>

<style lang="scss">
  .msgSystem {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .msgSystem-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: hidden;
      .msgSystem-item {
        padding: 10px;
        background: white;
        border-bottom: 1px solid #ccc;
        h1 {
          font-size: 16px;
          letter-spacing: 1px;
          padding: 10px 0;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
</style>
