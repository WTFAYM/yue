<template>
  <div class="msgLike">
    <statu-bar></statu-bar>
    <detail-header :title="'收到的赞'"></detail-header>
    <div class="msgLike-container">
      <div class="msgLike-item">
        <msg-item :isLike="true"></msg-item>
      </div>
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
      this.$store.commit('setMsgPoint', {key: 'showLikePoint', value: false});
    }
  }
</script>

<style lang="scss">
  .msgLike {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .msgLike-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: scroll;
    }
  }
</style>
