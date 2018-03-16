<template>
  <div class="testItem">
    <input type="number" @input="handleChange()" v-model="text">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    props: {
      value: ''
    },
    methods: {
      handleChange() {
        console.log('哈哈');
        this.$emit('input', this.text);
      },
    },
    watch: {
      value(val) {
        this.text = val;
      }
    }
    ,
    created() {
      this.text = this.value;
    }
  }
</script>

<style lang="scss">
  .testItem {
    padding: 10px;
    input {
      width: 70%;
      height: 30px;
      border: 1px solid #ccc;
    }
  }
</style>
