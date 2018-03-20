<template>
  <div class="addTree">
    <statu-bar></statu-bar>
    <ac-header></ac-header>
    <div class="addTree-content">
      <div class="addTree-content-text">
        <mt-field placeholder="宣泄你的情感吧！" type="textarea" rows="6" v-model="addTreeText"></mt-field>
      </div>
    </div>
    <div class="addTree-btn">
      <mt-button size="large" @click="push()">发布</mt-button>
    </div>
  </div>
</template>
<script>
  import acHeader from '../components/acHeader.vue'

  export default {
    components: {
      acHeader
    },
    data() {
      return {
        addTreeText: ""
      }
    },
    methods: {
      push() {

      }
    }
  }
</script>

<style lang="scss">
  .addTree {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .addTree-container {
      height: calc(100vh - 60px - 44px);
      overflow: scroll;
      position: relative;
      .addTree-content-text {
        font-size: 14px;
        .mint-field-core {
          letter-spacing: 1px;
          border-bottom: 1px solid #fa729a;
        }
      }
    }
    .addTree-btn {
      position: absolute;
      bottom: 3px;
      left: 0;
      right: 0;
      padding: 0 10px;
      background: white;
      .mint-button--large {
        background: #fa729a;
        color: white;
        &:after {
          background: #ccc;
        }
      }
    }
  }
</style>
