<template>
  <div class="activity">
    <div v-if="datalist" class="actItemList">
      <div class="actItem" v-for="(item ,index) in datalist" :key="index">
        <div class="actItem-top">
          <img src="../../../assets/img/start_1.jpg">
        </div>
        <div class="actItem-bottom">
          <span>运动吧！少年</span>
          <span class="actItem-label">运动</span>
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
    padding: 0 10px;
    .actItemList {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
    }
    .actItem {
      width: 48%;
      height: 150px;
      margin: 8px 0;
      .actItem-top {
        height: 60%;
        img {
          width: 100%;
          max-height: 100%;
        }
      }
      .actItem-bottom {
        overflow: hidden;
        height: calc(40% - 10px);
        padding: 5px;
        background: white;
        span {
          width: 100%;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
        }
        .actItem-label {
          color: #fa729a;
          font-size: 12px;
        }
      }
    }
  }
</style>
