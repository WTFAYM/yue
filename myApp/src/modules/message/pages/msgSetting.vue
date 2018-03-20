<template>
  <div class="msgSetting">
    <statu-bar></statu-bar>
    <detail-header :title="'消息设置'"></detail-header>
    <div class="msgSetting-container">
      <div class="msgSetting-item">
        <mt-cell title="开启提醒">
          <mt-switch @change="remindChange" v-model="remind"></mt-switch>
        </mt-cell>
      </div>
      <div class="msgSetting-item">
        <mt-cell title="接收推送">
          <mt-switch @change="notificationChange" v-model="notification"></mt-switch>
        </mt-cell>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        remind: true,
        notification: true
      }
    },
    methods: {
      remindChange() {
        localStorage.setItem('msgRemind', this.remind);
      },
      notificationChange() {
        localStorage.setItem('msgNotification', this.notification);
      }
    },
    created() {
      this.remind = localStorage.getItem('msgRemind') === 'true';
      this.notification = localStorage.getItem('msgNotification') === 'true';
    }
  }
</script>

<style lang="scss">
  .msgSetting {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .msgSetting-container {
      position: relative;
      height: calc(100% - 40px);
      overflow: hidden;
      .msgSetting-item {
        padding: 5px 0;
      }
    }
  }
</style>
