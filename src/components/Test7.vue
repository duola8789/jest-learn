<template>
  <div class="outer">
    <p>{{text}}</p>
    <p>Result is {{result}}</p>
    <button @click="getResult">getResult</button>
    <button @click="getQuestion">getQuestion</button>
  </div>
</template>

<script>
  import { forData } from '@/helper';
  import axios from 'axios'

  export default {
    data() {
      return {
        text: '',
        result: ''
      }
    },
    async mounted() {
      const ret = await forData(axios.get('text.do'));
      this.text = ret.map(val => val.name)
    },
    methods: {
      async getResult() {
        const res = await forData(axios.get('result.do'));
        switch (res) {
          case 0 : {
            this.result = '000';
            break
          }
          case 1 : {
            this.result = '111';
            break
          }
        }
      },
      async getQuestion() {
        const r1 = await forData(axios.get('result1.do'));
        const r2 = await forData(axios.get('result2.do'));
        const res = r1 + r2;
        switch (res) {
          case 2 : {
            this.result = '222';
            break
          }
          case 3 : {
            this.result = '333';
            break
          }
        }
      },
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
