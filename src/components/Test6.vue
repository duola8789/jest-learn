<template>
  <div class="outer">
    <p>This button has been clicked {{count}}</p>
    <button @click="addCounter">click</button>
  </div>
</template>

<script>
  import _ from 'lodash';
  export default {
    data() {
      return { count: 0 }
    },
    methods: {
      addCounter: _.debounce(function () {
        this.handler()
      }, 500),
      handler() {
        this.count += 1;
      }
    }
  }
</script>

<style>
  ul {
    width: 500px;
  }
  .my-button {
    padding: 5px 10px;
    color: red
  }
</style>
