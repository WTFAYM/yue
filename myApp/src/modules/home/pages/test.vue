<template>
  <div class="test">
    <text-item v-model="value"></text-item>
    <button @click="handleClick()">点击查看model值</button>
    <button @click="changeValue()">点击改变model值</button>
    <div class="back">

    </div>
  </div>
</template>

<script type="text/babel">
  import textItem from '../components/testItem.vue'

  export default {
    components: {
      textItem
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleClick() {
        console.log(this.value);
      },
      changeValue() {
        this.value = '10';
      }
    },
    created() {

    },
    mounted() {

    }
  };
</script>

<style>
  .text {
    height: 100vh;
    overflow-y: scroll;
  }

  .back {
    width: 100%;
    height: 200px;
  }
</style>
