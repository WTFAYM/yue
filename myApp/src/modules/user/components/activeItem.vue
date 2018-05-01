<template>
  <div class="his-activeItem" @click="toActiveItem()">
    <div class="his-activeItem-top">
      <div class="his-activeItem-img">
        <img src="../../../assets/img/01.jpg">
      </div>
      <div class="his-activeItem-top-right">
        <div class="his-activeItem-title">
          <span>震惊，**竟然在***做这种事情！！</span>
        </div>
        <span class="his-activeItem-time">{{date | DateTran}}</span>
      </div>
    </div>
    <div class="his-activeItem-bottom" v-if="false">
      <div class="activeItem-user">
        <div class="activeItem-user-avatar">
          <img src="../../../assets/img/01.jpg">
        </div>
        <div class="activeItem-user-name">WTFAYM</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        date: null,
      }
    },
    props:{
      info:null
    },
    methods: {
      toActiveItem(item) {
        this.$router.push({name: 'active_detail', params: {data:item}});
      }
    },
    created() {
      this.date = new Date();
    }
  }
</script>

<style lang="scss" scoped>
  .his-activeItem {
    padding: 10px;
    position: relative;
    .his-activeItem-top {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
    }
    .his-activeItem-img {
      img {
        width: 150px;
        height: 75px;
      }
    }
    .his-activeItem-top-right {
      margin-left: 20px;
      width: calc(100% - 150px - 20px);
      position: relative;
      .his-activeItem-title {
        font-size: 14px;
      }
      .his-activeItem-time {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 12px;
      }
      .his-activeItem-comment {
        .his-activeItem-comment-item {

        }
      }
    }
    .his-activeItem-bottom {
      height: 1rem;
      padding: 0 10px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      .activeItem-user {
        display: flex;
        align-items: center;
        .activeItem-user-avatar {
          display: inline-block;
          height: .8rem;
          width: .8rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .activeItem-user-name {
          margin-left: 10px;
          display: inline-block;
          font-size: 14px;
        }
      }
    }
  }
</style>
