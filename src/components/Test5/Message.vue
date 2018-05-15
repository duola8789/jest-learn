<template>
  <li>{{message}}</li>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      message: {
        required: true,
        type: String
      }
    },
    data: function () {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>

<style scoped>

</style>
