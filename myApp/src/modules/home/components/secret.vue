<template>
  <div class="secret">
    <div class="secret-top">
      <div class="secret-user">
        <div class="secret-user-avatar">
          <img src="../../../assets/img/dog.jpg">
        </div>
        <div class="secret-user-name">汪汪汪</div>
      </div>
      <div class="secret-time">
        <span>{{date | DateTran}}</span>
      </div>
    </div>
    <div class="secret-content">
      <div class="secret-text">
        <p>这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本这里是测试文本</p>
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
    created() {
      this.date = new Date();
    }
  }
</script>

<style lang="scss">
  .secret {
    color: #fa729a;
    position: relative;
    margin-bottom: 10px;
    background: white;
    .secret-top {
      height: 1rem;
      padding: 0 10px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      .secret-user {
        display: flex;
        align-items: center;
        .secret-user-avatar {
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
        .secret-user-name {
          margin-left: 10px;
          display: inline-block;
          font-size: 14px;
        }
      }
      .secret-time {
        display: flex;
        align-items: center;
        span {
          font-size: 12px;
        }
      }
    }
    .secret-content {
      padding: 5px 10px;
    }
  }
</style>
