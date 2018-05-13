<template>
  <ul class="list-messages">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'MessageList',
    data: function () {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>

<style scoped>
  .list-messages {
    width: 500px;
    margin: 0 auto;
  }
  li {
    text-align: left;
  }
</style>
