<template>
  <ul class="base-page" @click="sayHi">
    <li>index.vue</li>
    <li>{{pageName}}</li>
    <li>{{mixinName}}</li>
  </ul>
</template>

<script>
import mixin from './mixin.js';

export default {
  name: 'BaseIndex',
  mixins: [mixin],
  data() {
    return {
      pageName: 'index',
      index: 'declare in index only'
    }
  },
  created() {
    console.warn('index created');
    this.sayHi();
  },
  methods: {
    sayHi() {
      console.warn('index say hi')
    }
  }
}
</script>

<style scoped>
.base-page {
  font-size: 40px;
  user-select: none;
  width: 200px;
  text-align: left;
  margin: 0 auto;
}
</style>