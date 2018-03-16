<template>
  <div class="commentItem">
    <div class="commentItem-top">
      <div class="commentItem-user">
        <div class="commentItem-user-avatar">
          <img src="../../../assets/img/01.jpg">
        </div>
        <div class="commentItem-user-name">WTFAYM</div>
      </div>
      <div class="commentItem-time">
        <span>2018-3-12 11:50</span>
      </div>
    </div>
    <div class="commentItem-content">
      <p>这里是测试内容这里是测试内容这里是测试内容这里是测试内容这里是测试内容这里是测试内容这里是测试内容这里是测试内容这里是测试内容这里是测试内容</p>
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
  .commentItem {
    color: #fa729a;
    position: relative;
    margin-bottom: 10px;
    background: white;
    .commentItem-top {
      height: 1rem;
      padding: 0 10px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      .commentItem-user {
        display: flex;
        align-items: center;
        .commentItem-user-avatar {
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
        .commentItem-user-name {
          margin-left: 10px;
          display: inline-block;
          font-size: 14px;
        }
      }
      .commentItem-time {
        display: flex;
        align-items: center;
        span {
          font-size: 12px;
        }
      }
    }
    .commentItem-content {
      padding: 10px;
    }
  }
</style>
