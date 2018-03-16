<template>
  <div class="dialog">
    <div class="dialogRightItem dialogItem" v-if="data.self">
      <div class="dialogItem-content">
        <p>{{data.text}}</p>
      </div>
      <div class="dialogItem-avatar">
        <img src="../../../assets/img/01.jpg">
      </div>
    </div>
    <div class="dialogLeftItem dialogItem" v-else>
      <div class="dialogItem-avatar">
        <img src="../../../assets/img/01.jpg">
      </div>
      <div class="dialogItem-content">
        <p>{{data.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['data'],
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .dialog {
    margin-bottom: 10px;
    .dialogItem {
      display: flex;
      .dialogItem-avatar {
        display: inline-block;
        padding-top: 3px;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .dialogItem-content {
        background: white;
        padding: 2px 10px;
        p {
          font-size: 14px
        }
      }
    }
    .dialogLeftItem {
      padding: 10px 40px 0 10px;
      display: flex;
      justify-content: flex-start;
      .dialogItem-content {
        margin-left: 5px;
      }
    }
    .dialogRightItem {
      padding: 10px 10px 0 40px;
      display: flex;
      justify-content: flex-end;
      .dialogItem-content {
        margin-right: 5px;
        overflow-wrap: break-word;
        max-width: calc(100% - 30px);
      }
    }
  }
</style>
