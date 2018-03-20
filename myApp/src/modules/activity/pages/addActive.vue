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
        <mt-cell title="标签" :value="labelText" @click.native="choseLabel()"></mt-cell>
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
      :endDate="startMaxDate"
      @confirm="handleStartConfirm">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="end"
      type="datetime"
      :startDate="endMinDate"
      :endDate="endMaxDate"
      @confirm="handleEndConfirm">
    </mt-datetime-picker>
    <mt-popup
      class="labelPop"
      v-model="labelPop"
      position="bottom"
      popup-transition="popup-slide">
      <mt-picker :slots="slots" valueKey="name" @change="onValuesChange"></mt-picker>
    </mt-popup>
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
        time: '',
        address: '',
        introduce: '',
        people: '',
        labelText: '',
        labelId: '',
        labelPop: false,
        img: '',
        startTime: '',
        startMinDate: null,
        startMaxDate: null,
        endTime: '',
        endMinDate: null,
        endMaxDate: null,
        slots: [
          {
            flex: 1,
            values: [
              {
                name: '跑步',
                img: 'assets/classify/跑步.png',
                id: 0,
              },
              {
                name: '舞蹈',
                img: 'assets/classify/舞蹈2.png',
                id: 1,
              },
              {
                name: '自行车',
                img: 'assets/classify/自行车.png',
                id: 2,
              },
              {
                name: '摄影',
                img: 'assets/classify/摄影旅行.png',
                id: 3,
              },
              {
                name: '音乐',
                img: 'assets/classify/音乐.png',
                id: 4
              },
              {
                name: '阅读',
                img: 'assets/classify/阅读.png',
                id: 5,
              },
              {
                name: '篮球',
                img: 'assets/classify/篮球.png',
                id: 6,
              },
              {
                name: '足球',
                img: 'assets/classify/足球.png',
                id: 7,
              },
              {
                name: '网球',
                img: 'assets/classify/网球.png',
                id: 8,
              },
              {
                name: '羽毛球',
                img: 'assets/classify/羽毛球.png',
                id: 9,
              },
              {
                name: '滑板',
                img: 'assets/classify/滑板.png',
                id: 10,
              },
              {
                name: '轮滑',
                img: 'assets/classify/滑冰鞋.png',
                id: 11,
              },
              {
                name: '游戏',
                img: 'assets/classify/游戏.png',
                id: 12,
              },
              {
                name: '社团',
                img: 'assets/classify/社团活动.png',
                id: 13
              },
              {
                name: '兼职',
                img: 'assets/classify/work.png',
                id: 14
              },
              {
                name: '比赛',
                img: 'assets/classify/比赛.png',
                id: 15
              },
              {
                name: '公益',
                img: 'assets/classify/公益中心.png',
                id: 16
              },
              {
                name: '其他',
                img: 'assets/classify/其他.png',
                id: 17
              },

            ],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
      }
    },
    created() {
      let temp = new Date()
      this.startMinDate = temp;
      this.startTime = temp;
      this.endMinDate = temp;
      let newDate = new Date();
      newDate.setTime(temp.getTime() + 30 * 24 * 3600 * 1000);
      this.startMaxDate = newDate;
      newDate.setTime(temp.getTime() + 60 * 24 * 3600 * 1000);
      this.endMaxDate = newDate;
    },
    methods: {
      push() {

      },
      onValuesChange(picker, values) {
        this.labelText = values[0].name;
        this.labelId = values[0].id;
      },
      choseLabel() {
        this.labelPop = true
      },
      handleStartConfirm(value) {
        this.startTime = value;
        this.endMinDate = value;
      },
      handleEndConfirm(value) {
        this.endTime = value;
        this.startMaxDate = value;
      },
      choseStartTime() {
        this.startMinDate = new Date();
        this.$refs.start.open();
      },
      choseEndTime() {
        this.endMinDate = new Date();
        this.$refs.end.open();
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

  .labelPop {
    width: 100vw;

  }
</style>
