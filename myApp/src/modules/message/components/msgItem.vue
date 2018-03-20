<template>
  <div class="msgItem">
    <div class="msgItem-top">
      <div class="msgItem-info">
        <div class="msgItem-avatar">
          <img src="../../../assets/img/01.jpg">
        </div>
        <div class="msgItem-right">
          <span class="msgItem-name">HHHaads</span>
          <span class="msgItem-time">{{date | DateTran}}</span>
        </div>
      </div>
    </div>
    <div class="msgItem-content">
      <p v-if="isLike">赞了你</p>
      <p v-else>我觉得也是啊</p>
    </div>
    <div class="msgItem-bottom">
      <div class="msgItem-dyn" v-if="dyn" @click="toDynDetail()">
        <p>您在<span class="msgItem-dyn-time">{{date | DateTran}}</span>发表的动态</p>
      </div>
      <div class="msgItem-act" v-else>
        <active-item></active-item>
      </div>
    </div>
  </div>
</template>
<script>
  import activeItem from '../../user/components/activeItem.vue'

  export default {
    components: {
      activeItem
    },
    props: {
      isLike: {
        default: false
      }
    },
    data() {
      return {
        dyn: false,
        date: null,
      }
    },
    created() {
      this.date = new Date();
    },
    methods: {
      toDynDetail() {
        this.$router.push({name: 'dynamic', params: {data: {dynId: 1}}});
      }
    }
  }
</script>

<style lang="scss">
  .msgItem {
    background: white;
    margin-bottom: 10px;
    .msgItem-info {
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      align-items: center;
      padding: 5px 10px;
      .msgItem-avatar {
        display: inline-block;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .msgItem-right {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        color: #fa729a;
      }
      .msgItem-name {

      }
      .msgItem-time {
        font-size: 12px;
      }
    }
    .msgItem-content {
      padding: 5px 10px;
      p {
        font-size: 14px;
      }
    }
    .msgItem-bottom {
      .msgItem-dyn {
        padding: 10px;
        margin: 0 10px;
        background: #ccc;
      }
    }
  }
</style>
