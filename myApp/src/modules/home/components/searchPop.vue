<template>
  <div class="searchPop">
    <div class="sec-statubar"></div>
    <div class="mint-search">
      <div class="mint-searchbar">
        <div class="mint-searchbar-inner">
          <i class="mintui back-icon" @click="closePop"></i>
          <input
            ref="input"
            @click="visible = true"
            type="search"
            v-model="searchVal"
            :placeholder="'奔跑吧！少年'"
            class="mint-searchbar-core">
          <i class="mintui mintui-search" @click="search"></i>
        </div>
      </div>
    </div>
    <div class="searchHis">
      <div class="searchHis-title">搜索记录</div>
      <div class="searchHisListBox">
        <div class="searchHisItem" v-for="i in 10 ">
          勇敢的心
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchVal: '',
        preArr: ['1', '2', '3', '4', '5'],
      }
    },
    methods: {
      closePop() {
        this.$emit('hideSearchPop');
      },
      search() {
        console.log(this.searchVal);
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  .searchPop {
    width: 100vw;
    height: 100vh;
    background: #f6f6f6;
    .sec-statubar {
      height: 20px;
      background-color: #fa729a;
    }
    .searchHis {
      border-radius: 5px;
      width: calc(100% - 20px);
      margin: 10px auto;
      .searchHis-title {
        text-align: center;
      }
      .searchHisListBox {
        overflow: scroll;
        .searchHisItem {
          display: inline-block;
          background: #fff;
          padding: 5px;
          margin: 10px;
          border-radius: 5px;
          text-align: center;
          line-height: 24px;
        }
      }
    }
    /*输入框样式覆盖*/
    .back-icon {
      &:before {
        content: "";
        width: 20px;
        height: 20px;
        display: block;
        background-position: center;
        background-image: url("../../../assets/icon/向左箭头.png");
        background-size: 40px 40px;
      }
    }
    .mint-search {
      height: auto;
    }
    .mint-searchbar {
      background: #fa729a;
    }
    .mint-searchbar-inner {
      display: flex;
      align-items: center;
      .mintui-search {
        color: #fa729a;
        padding-top: 2px;
        &:before {
          font-size: .4rem;
        }
      }
    }
    .mint-searchbar-core {
      text-indent: 5px;
      letter-spacing: 1px;
    }
    .mint-searchbar-cancel {
      color: #fff;
    }
    /*输入框样式覆盖*/
  }
</style>
