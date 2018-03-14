<template>
  <div class="home-header">
    <div class="home-header-top">
      <div class="portrait-box clearfix" @click="handleUserPop()">
        <img class="portrait-box-list" src="../../../assets/icon/list.png">
        <img class="portrait-box-user" src="../../../assets/img/01.jpg">
      </div>
      <div class="home-header-title">{{title}}</div>
      <slot name="right"></slot>
    </div>
    <mt-popup class="userPop"
              v-model="showUserPop"
              position="left"
              popup-transition="popup-slide">
      <user-pop @hideUserPop='hideUserPop'></user-pop>
    </mt-popup>
  </div>
</template>
<script>
  import userPop from '../components/userPop.vue'

  export default {
    components: {
      userPop
    },
    data() {
      return {
        showUserPop: false,
      }
    },
    props: {
      title: '',
    },
    methods: {
      handleUserPop() {
        this.showUserPop = true;
      },
      hideUserPop() {
        this.showUserPop = false;
      },
    }
  }
</script>

<style lang="scss">
  .home-header {
    margin-top: 20px;
    background-color: #fa729a;
    .home-header-top {
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      .portrait-box {
        display: flex;
        vertical-align: middle;
        align-items: center;
        .portrait-box-list {
          width: 20px;
          height: 20px;
          margin-left: -10px;
        }
        .portrait-box-user {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin-left: 3px;
          background-color: #ccc;
        }
      }
      .home-header-title {
        font-size: 16px;
        padding: 5px;
        color: white;
      }
    }
    .mint-popup {
      transition: .5s ease-out;
    }
  }

</style>
