<template>
  <div class="currentAct">
    <statu-bar></statu-bar>
    <detail-header :title="'当前活动'"></detail-header>
    <div class="currentAct-container">
      <active-item v-for="(item,index) in 10" :key="index" :info="item"></active-item>
    </div>
  </div>
</template>
<script>
  import activeItem from '../../user/components/activeItem.vue'

  export default {
    components: {
      activeItem
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .currentAct {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .currentAct-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: scroll;
    }
  }
</style>
