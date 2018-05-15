<template>
  <MessageList>
    <header slot="header"> Awesome header </header>
    <Message v-for="message in messages" :key="message" :message="message"></Message>
  </MessageList>
</template>

<script>
  import MessageList from './MessageList'
  import Message from './Message'

  export default {
    name: 'Test5',
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
