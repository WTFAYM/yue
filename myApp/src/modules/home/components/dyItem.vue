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
    <div class="dyItem-bottom" v-if="comment">
      <div class="dyItem-comment" @click="toDetail()">
        <img src="../../../assets/icon/comment-l.png">
        <span class="dyItem-comment-count">{{commentCount}}</span>
      </div>
      <div class="dyItem-comment" @click="like()" v-if="unLike">
        <img src="../../../assets/icon/like.png">
        <span class="dyItem-comment-count">{{likeCount}}</span>
      </div>
      <div class="dyItem-comment" @click="unlike()" v-else>
        <img src="../../../assets/icon/liked.png">
        <span class="dyItem-comment-count">{{likeCount}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';

  export default {
    data() {
      return {
        dynamic: null,
        unLike: true,
        commentCount: 10,
        likeCount: 20
      }
    },
    props: {
      comment: {
        default: true
      }
    },
    created() {
      this.dynamic = {}
    },
    methods: {
      like() {
        this.unLike = false;
        this.likeCount++;
        Toast({
          message: '点赞成功～～',
          duration: 1500,
          className: 'dyItemToast'
        });
      },
      unlike() {
        this.unLike = true;
        this.likeCount--;
        Toast({
          message: '取消点赞～～',
          duration: 1500,
          className: 'dyItemToast'
        });
      },
      toDetail() {
//        点击时将资料传过去
        this.$router.push({name: 'dynamic', params: {data: {dataList: [1, 2]}}})
      }
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

  .dyItemToast {
    width: 90%;
    border-radius: 20px;
    top: 90% !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }
</style>
