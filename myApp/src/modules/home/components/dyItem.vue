<template>
  <div class="dyItem">
    <div class="dyItem-top">
      <div class="dyItem-user">
        <div class="dyItem-user-avatar">
          <img src="../../../assets/img/01.jpg">
        </div>
        <div class="dyItem-user-name">WTFAYM</div>
      </div>
      <div class="dyItem-time">
        <span>2018-3-12 11:50</span>
      </div>
    </div>
    <div class="dyItem-content">
      <div class="dyItem-text">
        <p>这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本</p>
      </div>
      <div class="dyItem-img">
        <!--这里要用一次遍历-->
        <img src="../../../assets/img/01.jpg">
        <img src="../../../assets/img/01.jpg">
        <img src="../../../assets/img/01.jpg">
        <img src="../../../assets/img/01.jpg">
      </div>
    </div>
    <div class="dyItem-bottom">
      <div class="dyItem-comment">
        <img src="../../../assets/icon/comment-l.png">
        <span class="dyItem-comment-count">10</span>
      </div>
      <div class="dyItem-comment">
        <img src="../../../assets/icon/like.png">
        <span class="dyItem-comment-count">11</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dynamic: null,
      }
    },
    created() {
      this.dynamic = {}
    }
  }
</script>

<style lang="scss">
  .dyItem {
    color: #fa729a;
    position: relative;
    margin-bottom: 10px;
    background: white;
    .dyItem-top {
      height: 1rem;
      padding: 0 10px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      .dyItem-user {
        display: flex;
        align-items: center;
        .dyItem-user-avatar {
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
        .dyItem-user-name {
          margin-left: 10px;
          display: inline-block;
          font-size: 14px;
        }
      }
      .dyItem-time {
        display: flex;
        align-items: center;
        span {
          font-size: 12px;
        }
      }
    }
    .dyItem-content {
      padding: 5px 10px;
      .dyItem-text {
        p {

        }
      }
      .dyItem-img {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        img {
          width: 3rem;
          height: 3rem;
          padding: 3px;
        }
      }
    }
    .dyItem-bottom {
      display: flex;
      flex-wrap: nowrap;
      padding: 8px 0;
      .dyItem-comment {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .dyItem-comment-count {
          margin-left: 2px;
        }
      }
      img {
        width: 20px;
        height: 20px;
        display: inline-block;
      }
    }
  }
</style>
