<template>
  <div class="dynamicPage">
    <statu-bar></statu-bar>
    <detail-header :title="'详情'"></detail-header>
    <div class="dynamicPage-content">
      <dy-item :comment="false"></dy-item>
      <div class="dynamicPage-commentList">
        <comment-item></comment-item>
        <comment-item></comment-item>
        <comment-item></comment-item>
      </div>
      <div class="comment-all">
        <p>没有更多评论了哦！</p>
      </div>
    </div>
    <div class="dynamicPage-btn">
      <div class="dynamicPage-btn-item" @click="editComment">
        <img src="../../../assets/icon/comment-l.png">{{commentCount}}
      </div>
      <div class="dynamicPage-btn-item" v-if="unLike" @click="like()">
        <img src="../../../assets/icon/like.png">{{likeCount}}
      </div>
      <div class="dynamicPage-btn-item" v-else @click="unlike()">
        <img src="../../../assets/icon/liked.png">{{likeCount}}
      </div>
    </div>
  </div>
</template>
<script>
  import dyItem from '../../home/components/dyItem.vue'
  import commentItem from '../components/coment.vue'
  import {Toast, MessageBox} from 'mint-ui';

  export default {
    components: {
      dyItem,
      commentItem,
    },
    data() {
      return {
        unLike: true,
        commentCount: 10,
        likeCount: 20
      }
    },
    created() {
//      通过获取的id查询评论
      console.log(this.$route.params.data)
    },
    methods: {
      like() {
        Toast({
          message: '点赞成功～～',
          duration: 1500,
          className: 'dynamicPageToast'
        });
        this.likeCount++;
        this.unLike = false;
      },
      unlike() {
        Toast({
          message: '取消点赞～～',
          duration: 1500,
          className: 'dynamicPageToast'
        });
        this.likeCount--;
        this.unLike = true;
      },
      editComment() {
        MessageBox({
          title: '',
          message: '请输入评论内容',
          showInput: true,
          $type: 'prompt',
          confirmButtonText:'评论'
        }).then(({value}) => {
          console.log(value)
        })
      },
      submitComment() {

      }
    }
  }
</script>

<style lang="scss">
  .dynamicPage {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .dynamicPage-content {
      height: calc(100vh - 105px);
      overflow: scroll;
    }
    .dynamicPage-commentList {
      background: white;

    }
    .comment-all {
      p {
        padding: 10px 0;
        text-align: center;
        font-size: 12px;
        color: #fa719a;
      }
    }
    .dynamicPage-btn {
      display: flex;
      flex-wrap: nowrap;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background: white;
      border-top: 1px solid #ccc;
      .dynamicPage-btn-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
        &:first-child {
          border-right: 1px solid #ccc;
        }
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  .dynamicPageToast {
    width: 90%;
    border-radius: 20px;
    top: 80px !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }
</style>
