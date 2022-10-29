<template>
  <ul class="base-page" @click="sayHi">
    <li>extends2.vue</li>
    <li>{{pageName}}</li>
    <li>{{mixinName}}</li>
  </ul>
</template>


<script>
import mixin from './mixin.js';
import extends1 from '../extends1/index.vue';

console.warn(extends1)
// extends1.extends = undefined;

// extends1.mixins = [];

// 改写构造组件中的生命周期函数
// const extends1Created = extends1.created;
// extends1.created = function() {
//   console.warn('custom code before extends1 crated');
//   extends1Created.call(extends1)
// }

extends1.created = () => {}
extends1.mixins = [];
extends1.extends.created = () => {}
extends1.extends.mixins = []


export default {
  name: 'BaseIndexExtends',
  extends: extends1,
  mixins: [mixin],
  data() {
    return {
      pageName: 'extends2',
      extends1: 'declare in extends2 only'
    }
  },
  created() {
    console.warn('extends2 created');
  },
  methods: {
    sayHi() {
      console.warn('extends2 say hi')
    }
  }
}
</script>

<style scoped>
.base-page {
  font-size: 40px;
  user-select: none;
  width: 360px;
  text-align: left;
  margin: 0 auto;
}
</style>