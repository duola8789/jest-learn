<template>
  <div>
    <header class="list-header">
      <slot name="header">
        This is a default header
      </slot>
    </header>
    <ul class="list-messages">
      <slot></slot>
    </ul>
  </div>
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
  .list-header {
    width: 500px;
    margin: 10px auto;
    padding: 5px 0;
    font-size: 18px;
    border-bottom: 1px solid #7f7f7f;
  }
  .list-messages {
    width: 500px;
    margin: 0 auto;
  }
  li {
    text-align: left;
  }
</style>
