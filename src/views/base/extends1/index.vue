<template>
  <ul class="base-page" @click="sayHi">
    <li>extends1.vue</li>
    <li>{{pageName}}</li>
    <li>{{mixinName}}</li>
  </ul>
</template>


<script>
import mixin from './mixin.vue';
import base from '../index.vue';

console.warn(base)

// base.mixins = [];

// 改写构造组件中的生命周期函数
// const baseCreated = base.created;
// base.created = function() {
//   console.warn('custom code before base crated');
//   baseCreated.call(base)
// }

// 改写mixin中的构造函数
// mixin.created = () => {};

export default {
  name: 'BaseIndexExtends',
  extends: base,
  mixins: [mixin],
  data() {
    return {
      pageName: 'extends1',
      extends1: 'declare in extends1 only'
    }
  },
  created() {
    console.warn('extends1 created');
  },
  methods: {
    sayHi() {
      console.warn('extends1 say hi')
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