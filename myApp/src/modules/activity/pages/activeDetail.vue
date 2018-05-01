<template>
  <div class="activeDetail">
    <statu-bar></statu-bar>
    <detail-header :title="'详情'"></detail-header>
    <div class="activeDetail-container">
      <div class="activeDetail-infoBox">
        <mt-cell title="标题" value="震惊"></mt-cell>
        <mt-cell title="地点" value="刘宇新楼一层"></mt-cell>
        <mt-cell title="标签" value="跑步"></mt-cell>
        <mt-cell title="开始时间" value="2018-03-11 14:00"></mt-cell>
        <mt-cell title="结束时间" value="2018-03-11 16:00"></mt-cell>
        <div class="addActive-introduce">
          <p class="introduce-title">当前成员</p>
          <div class="activeDetail-member">
            <span class="activeDetail-member-item" v-for="(item,index) in 10" :key="index">{{item}}哈哈</span>
          </div>
        </div>
        <div class="addActive-introduce">
          <p class="introduce-title">活动介绍</p>
          <mt-field placeholder="请输入活动简介" :disabled="true" type="textarea" rows="4" v-model="introduce"></mt-field>
        </div>
      </div>
      <div class="activeDetail-content">
        <p class="activeDetail-content-title">评论</p>
        <div class="activeDetail-commentList">
          <comment-item></comment-item>
          <comment-item></comment-item>
          <comment-item></comment-item>
        </div>
        <div class="comment-all">
          <p>没有更多评论了哦！</p>
        </div>
      </div>
      <div class="activeDetail-btn">
        <div class="activeDetail-btn-item" @click="editComment">
          <img src="../../../assets/icon/comment-l.png">
        </div>
        <div class="activeDetail-btn-item" v-if="unLike" @click="like()">
          <img src="../../../assets/icon/like.png">
        </div>
        <div class="activeDetail-btn-item" v-else @click="unlike()">
          <img src="../../../assets/icon/liked.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import commentItem from '../../dynamic/components/coment.vue'
  import {Toast, MessageBox} from 'mint-ui';

  export default {
    components: {
      commentItem,
    },
    data() {
      return {
        unLike: true,
        introduce: '哈哈哈哈哈哈哈',
        itemInfo:null
      }
    },
    created() {
      this.itemInfo = this.$route.params.data;
      console.log(this.itemInfo);
    },
    methods: {
      like() {
        Toast({
          message: '点赞成功～～',
          duration: 1500,
          className: 'activeDetailToast'
        });
        this.unLike = false;
      },
      unlike() {
        Toast({
          message: '取消点赞～～',
          duration: 1500,
          className: 'activeDetailToast'
        });
        this.unLike = true;
      },
      editComment() {
        MessageBox({
          title: '',
          message: '请输入评论内容',
          showInput: true,
          $type: 'prompt',
          confirmButtonText: '评论'
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
  .activeDetail {
    height: calc(100% - 20px);
    overflow-y: hidden;
    padding-top: 20px;
    .activeDetail-container {
      height: calc(100% - 40px);
      overflow-y: scroll;
    }
    .activeDetail-infoBox {
      .mint-cell-title {
        width: 80px;
      }
    }
    .activeDetail-member {
      background: white;
      padding: 10px;
      width: 100%;
      .activeDetail-member-item {
        padding: 5px;
        border-radius: 5px;
        display: inline-block;
        margin-left: 10px;
        margin-top: 10px;
        border: 1px solid #ccc;
      }
    }
    .addActive-introduce {
      background: white;
      padding: 10px;
      .introduce-title {
        border-bottom: 1px solid #ccc;
      }
      .mint-cell-value {
        textarea {
          text-align: left;
          border-bottom: 1px solid #ccc;
        }
      }
    }
    .activeDetail-content-title {
      font-size: 14px;
      color: #ccc;
      text-align: center;
      margin: 10px 0;
    }
    .activeDetail-content {
      height: calc(100vh - 105px);
      overflow: scroll;
    }
    .activeDetail-commentList {
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
    .activeDetail-btn {
      display: flex;
      flex-wrap: nowrap;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background: white;
      border-top: 1px solid #ccc;
      .activeDetail-btn-item {
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

  .activeDetailToast {
    width: 90%;
    border-radius: 20px;
    top: 80px !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }
</style>
