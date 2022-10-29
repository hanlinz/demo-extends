export default {
  data() {
    return {
      baseMixin: 'declare in base mixin only'
    }
  },
  created() {
    console.warn('base mixin created')
  }
}