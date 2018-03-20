<template>
  <div class="userInfo-page">
    <div class="info-top" :style="{backgroundImage: `url(${userInfo.avatar})`}">
      <div class="info-header">
        <div class="info-backBox">
          <div class="info-back-icon" @click="back()">
            <img src="../../../assets/icon/向左箭头2.png">
          </div>
        </div>
      </div>
      <div class="info-content">
        <div class="info-avatar">
          <img src="http://139.199.188.40/img/01.jpg">
        </div>
        <div class="more-info" @click="toInfo()">
          账号资料
        </div>
        <div class="info-name">
          <span class="name">{{userInfo.name}}</span>
          <div v-if="userInfo.gender==0" class="gender">
            <img src="../../../assets/icon/gender-male.png">
          </div>
          <div v-else-if="userInfo.gender==1" class="gender">
            <img src="../../../assets/icon/gender-female.png">
          </div>
          <div v-else class="gender">
            <img src="../../../assets/icon/gender-male-female.png">
          </div>
        </div>
        <div class="info-introduce">
          <span>{{userInfo.introduce}}</span>
        </div>
      </div>
    </div>
    <div class="info-bottom">
      <div class="info-tab">
        <mt-tabbar v-model="tabIndex">
          <mt-tab-item id="0">
            我的动态
          </mt-tab-item>
          <mt-tab-item id="1">
            我的评论
          </mt-tab-item>
          <mt-tab-item id="2">
            我的点赞
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <div class="info-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="tabIndex" swipeable>
          <mt-tab-container-item id="0">
            <dy-item></dy-item>
            <dy-item></dy-item>
            <dy-item></dy-item>
          </mt-tab-container-item>
          <mt-tab-container-item id="1">

          </mt-tab-container-item>
          <mt-tab-container-item id="2">

          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<script>
  import dyItem from '../../home/components/dyItem.vue'

  export default {
    components: {
      dyItem
    },
    data() {
      return {
        userInfo: null,
        tabIndex: '0'
      }
    },
    created() {
      this.userInfo = {
        avatar: 'http://139.199.188.40/img/01.jpg',
        name: 'WTFAYM',
        gender: '',
        introduce: '这个人懒死了，什么都没有写'
      }
    },
    methods: {
      back() {
        this.$router.back();
      },
      toInfo() {
        this.$router.push({name: 'user_alert'});
      }
    }
  }
</script>

<style lang="scss">
  .userInfo-page {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .info-top {
      position: relative;
      height: 38vh;
      background-size: cover;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: rgba(0, 0, 88, .4);
      }
      .info-content {
        position: absolute;
        left: 10%;
        top: 25%;
        width: 80%;
        overflow: hidden;
        z-index: 10;
      }
      .more-info {
        border: 1px solid #eee;
        position: absolute;
        right: 0;
        top: 0;
        color: #eee;
        padding: 5px;
      }
      .info-avatar {
        width: 98px;
        height: 98px;
        border-radius: 50px;
        border: 1px solid #fff;
        overflow: hidden;
        img {
          width: 98px;
          height: 98px;
        }
      }
      .info-name {
        padding: 10px 0;
        .name {
          letter-spacing: 1px;
          color: white;
        }
        .gender {
          display: inline-block;
          height: 20px;
          width: 20px;
          margin-left: 5px;
          position: relative;
          img {
            width: 20px;
            height: 20px;
            margin-top: 2px;
          }
        }
      }
      .info-introduce {
        width: 100%;
        overflow: hidden;
        span {
          width: 100%;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: white;
          font-size: 12px;
        }
      }
    }
    .info-header {
      width: 100%;
      padding-top: 20px;
      .info-back-icon {
        height: 20px;
        width: 20px;
        margin-left: 10px;
        position: relative;
        overflow: hidden;
        z-index: 10;
        img {
          width: 40px;
          height: 40px;
          position: absolute;
          left: -50%;
          top: -50%;
        }
      }
    }
    .info-bottom {
      padding: 10px;
      height: calc(62vh - 10px);
      position: relative;
    }
    .info-tab {

      .mint-tabbar {
        position: relative;
      }
      .mint-tabbar > .mint-tab-item.is-selected {
        color: #fa729a;
        background: none;
      }
      .mint-tabbar {
        position: relative;
        background-size: 100% 0;
        .mint-tab-item-label {
          font-size: 14px;
        }
        a {
          color: #fa729a;
        }
        .is-selected {
          color: #fa729a;
          &:after {
            content: "";
            width: 50%;
            margin: 0 auto;
            height: 3px;
            border-radius: 3px;
            box-shadow: 1px 0;
            display: block;
            top: 7px;
            position: relative;
            background-color: #fa729a;
          }
        }
      }
      .mint-tab-item-label {
        font-size: 16px;
        padding: 5px 0;
      }
    }
    .info-tab-container {
      height: calc(100% - 44px);
      .mint-tab-container {
        height: 100%;
      }
      .mint-tab-container-wrap {
        height: 100%;
      }
    }
    .mint-tab-container-item {
      overflow: scroll;
    }
  }
</style>
