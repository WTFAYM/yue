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
        <div class="info-avatar"></div>
        <div class="more-info">
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
            我的发布
          </mt-tab-item>
          <mt-tab-item id="1">
            我的参与
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <div class="info-tab-container">
        <mt-tab-container class="page-tabbar-tab-container" v-model="tabIndex" swipeable>
          <mt-tab-container-item id="0">
            我的发布
          </mt-tab-container-item>
          <mt-tab-container-item id="1">
            我的参与
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        userInfo: null,
        tabIndex: '0'
      }
    },
    created() {
      this.userInfo = {
        avatar: '',
        name: 'WTFAYM',
        gender: '',
        introduce: '这个人懒死了，什么都没有写'
      }
    },
    methods: {
      back() {
        this.$router.back();
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
        z-index: -1;
        background: rgba(0, 0, 88, .4);
      }
      .info-content {
        position: absolute;
        left: 10%;
        top: 25%;
        width: 80%;
        overflow: hidden;
      }
      .more-info {
        position: absolute;
        right: 0;
        top: 0;
        color: white;
        padding: 5px;
      }
      .info-avatar {
        width: 98px;
        height: 98px;
        border-radius: 50px;
        border: 1px solid #fff;
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
    }
    .info-tab-container {
      height: 100%;
      min-height: calc(100% - 26px);
      .mint-tab-container {
        height: 100%;
      }
      .mint-tab-container-wrap {
        height: 100%;
      }
    }
  }
</style>
