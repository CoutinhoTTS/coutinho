<template>
  <form action="/">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
    />
  </form>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
