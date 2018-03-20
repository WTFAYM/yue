<template>
  <div class="subject" @click="toSubject()">
    <div class="subject-img">
      <img src="http://139.199.188.40/img/01.jpg">
    </div>
    <div class="subject-title">
      <span>一起来更精彩</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      toSubject() {
//        this.$router.push({name:''});
      }
    }
  }
</script>

<style lang="scss">
  .subject {
    margin: 10px;
    background: white;
    border-bottom: 1px solid #ccc;
    .subject-img {
      img {
        width: 100%;
        height: 150px;
      }
    }
    .subject-title {
      margin-top: 5px;
      font-size: 16px;
      font-weight: 500;
      padding-left: 10px;
    }
  }
</style>
