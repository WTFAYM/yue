<template>
  <div class="followItem">
    <div class="followItem-user">
      <div class="followItem-user-avatar">
        <img src="../../../assets/img/01.jpg">
      </div>
      <div class="followItem-user-name">WTFAYM</div>
    </div>
    <div class="followItem-btn" v-if="showBtn">
      <mt-button @click.native="cancleFollow()">取消关注</mt-button>
    </div>
  </div>
</template>
<script>

  export default {
    props: {
      showBtn: {
        default: true
      }
    },
    data() {
      return {}
    },
    methods: {
      cancleFollow() {

      }
    }
  }
</script>

<style lang="scss">
  .followItem {
    height: 1rem;
    padding: 0 10px;
    margin: 5px 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background: white;
    .followItem-user {
      display: flex;
      align-items: center;
      .followItem-user-avatar {
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
      .followItem-user-name {
        margin-left: 10px;
        display: inline-block;
        font-size: 14px;
        color: #fa729a;
      }
    }
    .followItem-btn {
      display: flex;
      justify-content: center;
      .mint-button:not(.is-disabled):active::after {
        opacity: 0;
      }
      .mint-button-text {
        font-size: 14px;
      }
      .mint-button {
        width: 2rem;
        height: 30px;
        &:active {
          color: white;
          background: #fa729a;
        }
      }
    }
  }
</style>
