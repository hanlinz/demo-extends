export default{
  data() {
    return {
      pageName: 'extends2 mixin',
      mixinName: 'extends2 mixin',
      extends2Mixin: 'declare in extends2 only'
    }
  },
  created() {
    console.warn('extends2 mixin created')
  },
}

