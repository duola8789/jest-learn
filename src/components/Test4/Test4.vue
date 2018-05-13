<template>
  <MessageList>
    <Message v-for="message in messages" :key="message" :message="message"></Message>
  </MessageList>
</template>

<script>
  import MessageList from './MessageList'
  import Message from './Message'
  export default {
    name: 'Test4',
    props: ['messages'],
    data: function () {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      MessageList,
      Message
    }
  }
</script>

<style scoped>

</style>
