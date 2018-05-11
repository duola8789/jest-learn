<template>
  <button @click="increment('clicked')">Click {{buttonValue}} {{innerCount}}</button>
</template>

<script>
	export default {
    props: ['buttonValue'],
    data() {
      return {
        innerCount: 0
      }
    },
    computed: {},
    methods: {
      increment(value) {
        this.innerCount += 1;
        this.$emit('add', this.innerCount)
      }
    },
    components: {}
  }
</script>

<style>

</style>
