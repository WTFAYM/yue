<template>
  <div class="message">
    <statu-bar></statu-bar>
    <home-header :title="'消息'">
      <div class="search-box" slot="right" @click="handleSet()">
        <img src="../../../assets/message/设置.png">
      </div>
    </home-header>
    <div class="message-container">
      <div class="msg-item">
        <mt-cell title="当前活动" is-link to="/currentActive">
          <img slot="icon" src="../../../assets/message/clock.png">
        </mt-cell>
      </div>
      <div class="msg-item">
        <mt-cell title="回复我的" is-link to="/msgAnswer">
          <i class="msg-point" v-if="showAnswerPoint&&remind"></i>
          <img slot="icon" src="../../../assets/message/评论.png">
        </mt-cell>
      </div>
      <div class="msg-item">
        <mt-cell title="收到的赞" is-link to="/msgLike">
          <i class="msg-point" v-if="showLikePoint&&remind"></i>
          <img slot="icon" src="../../../assets/message/赞.png">
        </mt-cell>
      </div>
      <div class="msg-item">
        <mt-cell title="系统通知" is-link to="/msgSystem">
          <i class="msg-point" v-if="showSystemPoint&&remind"></i>
          <img slot="icon" src="../../../assets/message/通知.png">
        </mt-cell>
      </div>
      <div class="msg-item">
        <mt-cell title="活动参与规则" is-link to="/rule">
          <img slot="icon" src="../../../assets/message/说明.png">
        </mt-cell>
      </div>
    </div>
  </div>
</template>
<script>
  import homeHeader from '../components/homeHeader.vue'

  export default {
    components: {
      homeHeader,
    },
    data() {
      return {
        remind: false
      }
    },
    computed: {
      showAnswerPoint: {
        get() {
          return this.$store.state.messageStore.showAnswerPoint;
        },
        set(val) {
          this.$store.commit('setMsgPoint', {key: 'showAnswerPoint', value: val});
        }
      },
      showLikePoint: {
        get() {
          return this.$store.state.messageStore.showLikePoint;
        },
        set(val) {
          this.$store.commit('setMsgPoint', {key: 'showLikePoint', value: val});
        }
      },
      showSystemPoint: {
        get() {
          return this.$store.state.messageStore.showSystemPoint;
        },
        set(val) {
          this.$store.commit('setMsgPoint', {key: 'showSystemPoint', value: val});
        }
      },
    },
    methods: {
      handleSet() {
        this.$router.push({name: 'message_Setting'});
      }
    },
    activated() {
      this.remind = localStorage.getItem('msgRemind') === 'true';
    },
    created() {
      this.remind = localStorage.getItem('msgRemind') === 'true';
    }
  }
</script>

<style lang="scss">
  .message {
    height: calc(100% - 55px);
    overflow-y: scroll;
    .searchPop {
      transition: .5s ease-out;
    }
    .search-box {
      display: flex;
      align-items: center;
      margin-right: 0.2rem;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .message-container {
      min-height: calc(100% - 20px);
      .msg-item {
        padding: 5px 0;
        img {
          width: 24px;
          height: 24px;
          display: inline-block;
        }
        .msg-point {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: red;
          border-radius: 50%;
        }
      }
    }
  }
</style>
