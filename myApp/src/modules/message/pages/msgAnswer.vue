<template>
  <div class="msgAnswer">
    <statu-bar></statu-bar>
    <detail-header :title="'回复我的'"></detail-header>
    <div class="msgAnswer-container">
      <msg-item></msg-item>
    </div>
  </div>
</template>
<script>
  import msgItem from '../components/msgItem.vue'

  export default {
    components: {
      msgItem
    },
    data() {
      return {}
    },
    created() {
      this.$store.commit('setMsgPoint', {key: 'showAnswerPoint', value: false});
    }
  }
</script>

<style lang="scss">
  .msgAnswer {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .msgAnswer-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: scroll;
    }
  }
</style>
