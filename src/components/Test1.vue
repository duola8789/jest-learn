<template>
  <div class="outer">
    <p v-for="message in messages" :key="message">{{message}}</p>
    <p>This button has been clicked {{count}}</p>
    <MyButton class="my-button" style="padding-top: 10px" buttonValue="Me" @add="addCounter"></MyButton>
  </div>
</template>

  <script>
  import MyButton from './MyButton'

  export default {
    props: {
      messages: {
        type: Array,
        validator: (messages) => messages.length > 1,
        default() {
          return [0, 2]
        }
      }
    },
    data() {
      return {
        count: 0
      }
    },
    mounted () {
      this.$emit('add', 100)
    },
    methods: {
      addCounter(value) {
       this.count = value
      }
    },
    components: {
      MyButton
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
