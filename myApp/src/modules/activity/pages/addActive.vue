<template>
  <div class="addActive">
    <statu-bar></statu-bar>
    <ac-header></ac-header>
    <div class="addActive-content">
      <div class="addActive-title addActive-item">
        <mt-field label="标题" typeof="text" placeholder="请输入活动标题" :attr="{ maxlength: 16 }" v-model="title"></mt-field>
      </div>
      <div class="addActive-address addActive-item">
        <mt-field label="地点" typeof="text" placeholder="请输入活动地点" v-model="address"></mt-field>
      </div>
      <div class="addActive-label addActive-item">
        <span>标签</span>
      </div>
      <div class="addActive-address addActive-item">
        <mt-field label="人数上限" type="tel" placeholder="请输入人数上限" :attr="{ maxlength: 3}" v-model="people"></mt-field>
      </div>
      <div class="addActive-time addActive-item">
        <mt-cell title="开始时间" :value="startTime|DateTran" @click.native="choseStartTime()"></mt-cell>
      </div>
      <div class="addActive-time addActive-item">
        <mt-cell title="结束时间" :value="endTime|DateTran" @click.native="choseEndTime()"></mt-cell>
      </div>
      <div class="addActive-introduce addActive-item">
        <p class="introduce-title">活动介绍</p>
        <mt-field placeholder="请输入活动简介" type="textarea" rows="4" v-model="introduce"></mt-field>
      </div>
      <div class="addActive-img">
        <img src="" v-if="img">
        <img src="../../../assets/icon/add.png" @click="addImg()">
      </div>
    </div>
    <div class="addActive-btn">
      <mt-button size="large" @click="push()">发起活动</mt-button>
    </div>
    <mt-datetime-picker
      ref="start"
      type="datetime"
      :startDate="startMinDate"
      @confirm="handleStartConfirm">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="end"
      type="datetime"
      :startDate="endMinDate"
      @confirm="handleEndConfirm">
    </mt-datetime-picker>
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
        title: '',
        label: '',
        time: '',
        address: '',
        introduce: '',
        people: '',
        img: '',
        startTime: '',
        startTimePick: null,
        endTime: '',
        startMinDate: null,
        endMinDate: null,
        endTimePick: null,
      }
    },
    filters: {
      DateTran(value) {
        if (value) {
          let tmp_month = value.getMonth() + 1;
          let month = tmp_month > 10 ? '' + tmp_month : '0' + tmp_month;
          let day = value.getDate() > 10 ? '' + value.getDate() : '0' + value.getDate();
          let temp_h = value.getHours();
          let h = temp_h > 10 ? '' + temp_h : '0' + temp_h;
          let temp_m = value.getMinutes();
          let m = temp_m > 10 ? '' + temp_m : '0' + temp_m;
          return value.getFullYear() + '-' + month + '-' + day + ' ' + h + ':' + m;
        } else {
          return value
        }
      }
    },
    created() {
      this.startMinDate = new Date();
      this.endMinDate = this.startMinDate;
      this.startTimePick = this.startMinDate;
      this.endTimePick = this.startMinDate;
    },
    methods: {
      push() {

      },
      onValuesChange() {

      },
      handleStartConfirm(value) {
        this.startTime = value;
        this.endMinDate = value;
      },
      handleEndConfirm(value) {
        this.endTime = value;
      },
      choseStartTime() {
        this.startMinDate = new Date();
        this.$refs.start.open();
        console.log("chose start time")
      },
      choseEndTime() {
        this.endMinDate = new Date();
        this.$refs.end.open();
        console.log("chose end time")
      },
      addImg() {

      }
    }
  }
</script>

<style lang="scss">
  .addActive {
    height: calc(100% - 20px);
    overflow: hidden;
    padding-top: 20px;
    .addActive-content {
      height: calc(100vh - 60px - 44px);
      overflow: scroll;
      position: relative;
      .addActive-item {
        margin-bottom: 5px;
        .mint-cell-title {
          width: 80px;
        }
        .mint-field-core {
          text-align: right;
          padding-right: 5px;
        }
      }
      .addActive-introduce {
        background: white;
        padding: 10px;
        .introduce-title {
          border-bottom: 1px solid #ccc;

        }
        .mint-cell-value {
          textarea {
            text-align: left;
            border-bottom: 1px solid #ccc;
          }
        }
      }
      .addActive-img {
        padding: 10px 0;
        background: white;
        img {
          margin: 0 auto;
        }
      }
      .addActive-label {
        
      }
    }
    .addActive-btn {
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
