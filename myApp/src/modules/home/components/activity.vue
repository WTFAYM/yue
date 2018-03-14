<template>
  <div class="activity">
    <div v-if="datalist" class="actItemList">
      <div class="actItem" v-for="(item ,index) in datalist" :key="index">
        <div class="actItem-top">
          <img src="../../../assets/img/start_1.jpg">
        </div>
        <div class="actItem-bottom">
          <span>运动吧！少年</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      datalist: null
    }
  }
</script>

<style lang="scss">
  .activity {
    .actItemList {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    .actItem {
      width: 50%;
      height: 150px;
      .actItem-top {
        height: 60%;
        img {
          width: 90%;
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto;
        }
      }
      .actItem-bottom {
        overflow: hidden;
        height: calc(40% - 10px);
        padding: 5px;
        span {
          width: 100%;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
        }
      }
    }
  }
</style>
