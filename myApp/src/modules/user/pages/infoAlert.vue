<template>
  <div class="infoAlert">
    <statu-bar></statu-bar>
    <detail-header :title="'历史记录'"></detail-header>
    <div class="infoAlert-container">
      <div class="infoAlert-form">
        <div class="infoAlert-item">
          <mt-cell title="头像" @click.native="avatar">
            <div class="infoAlert-avatar">
              <img :src="ava">
            </div>
          </mt-cell>
        </div>
        <div class="infoAlert-item">
          <mt-cell title="用户名">
            <div class="infoAlert-avatar">
              <mt-field v-model="username"></mt-field>
            </div>
          </mt-cell>
        </div>
        <div class="infoAlert-item">
          <mt-cell title="性别">
            <div class="infoAlert-gender">
              <mt-radio
                v-model="gender"
                :options="['男', '女']">
              </mt-radio>
            </div>
          </mt-cell>
        </div>
        <div class="infoAlert-item">
          <mt-cell title="生日" :value="birthday|DateTranDay" @click.native="choseTime()"></mt-cell>
        </div>
        <div class="infoAlert-item  infoAlert-introduce">
          <p class="introduce-title">自我介绍</p>
          <mt-field placeholder="请输入简介" type="textarea" rows="4" v-model="introduce"></mt-field>
        </div>
      </div>
      <mt-datetime-picker
        ref="birthday"
        type="date"
        :startDate="MinDate"
        :endDate="MaxDate"
        @confirm="handleConfirm">
      </mt-datetime-picker>
    </div>
    <div class="infoAlert-btn">
      <mt-button size="large" @click="push()">确认修改</mt-button>
    </div>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: "WTFAYM",
        gender: '男',
        ava: 'http://139.199.188.40/img/dog.jpg',
        birthday: null,
        MinDate: null,
        MaxDate: null,
        introduce: "",
        sheetVisible: false,
        actions: []
      }
    },
    methods: {
      avatar() {
        this.sheetVisible = true;
      },
      push() {

      },
      choseTime() {
        this.MaxDate = new Date();
        this.$refs.birthday.open();
      },
      handleConfirm(value) {
        this.birthday = value;
      },
      photo() {
        navigator.camera.getPicture(imageData => {
          this.ava = "data:image/jpeg;base64," + imageData;
        }, err => {

        }, {
          ity: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          allowEdit: true,
          sourceType: 1
        });
      },
      dataURLtoFile: function (dataurl, filename) {
        let arr = dataurl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = window.atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        let blob = new Blob([u8arr], {type: mime});
        blob.lastModifiedDate = new Date();
        blob.name = filename;
        return blob
      },
      album() {
        navigator.camera.getPicture(imageData => {
          this.ava = imageData;
        }, err => {

        }, {
          ity: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          allowEdit: true,
          sourceType: 2,
        })
      }
    },
    created() {
      let temp = new Date();
      this.MaxDate = temp;
      let newDate = new Date();
      newDate.setTime(temp.getTime() - 100 * 12 * 30 * 24 * 3600 * 1000);
      this.MinDate = newDate;
      this.birthday = temp;
      this.actions = [{name: '拍照', method: this.photo}, {name: '从相册选取', method: this.album}]
    }
  }
</script>

<style lang="scss">
  .infoAlert {
    /*height: calc(100% - 20px);*/
    overflow: hidden;
    padding-top: 20px;
    .infoAlert-container {
      position: relative;
      /*height: calc(100% - 40px);*/
      overflow: scroll;
    }
    .infoAlert-form {
      margin-top: 20px;
      background: white;
      padding: 0 10px;
    }
    .infoAlert-item {
      padding: 5px 0;
      border-width: thin 1px;
      border-bottom: 1px solid #fa729a;
      .mint-cell {
        background: none;
      }
      .mint-cell-wrapper {
        background: none;
      }
      .mint-field-core {
        text-align: right;
        padding-right: 5px;
      }
    }
    .infoAlert-avatar {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .infoAlert-gender {
      .mint-radiolist {
        &:after {
          content: '';
          display: block;
          visibility: hidden;
          clear: both;
        }
      }
      .mint-cell {
        display: inline-block;
        float: left;
      }
    }
    .infoAlert-introduce {
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
    .infoAlert-btn {
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
