<template>
  <ul class="base-page" @click="sayHi">
    <li>mixin.vue</li>
    <li>{{pageName}}</li>
    <li>{{mixinName}}</li>
  </ul>
</template>


<script>
export default{
  data() {
    return {
      pageName: 'extends1 mixin',
      mixinName: 'extends1 mixin',
      extends1Mixin: 'declare in extends1 only'
    }
  },
  created() {
    console.warn('extend1 mixin created')
  },
}
</script>

