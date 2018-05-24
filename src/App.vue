<template>
  <div id="app">
    <Page :messages="messages" :needReverse="true"></Page>
  </div>
</template>

<script>
  // import Page from '@/components/Test1'
  // import Page from '@/components/Test2'
  // import Page from '@/components/Test3'
  // import Page from '@/components/Test4/Test4'
  // import Page from '@/components/Test5/Test5'
  import Page from '@/components/Test6'

  export default {
    name: 'App',
    data() {
      return {
        messages: ['Hello Jest', 'Hello Vue']
      }
    },
    components: {
      Page
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
