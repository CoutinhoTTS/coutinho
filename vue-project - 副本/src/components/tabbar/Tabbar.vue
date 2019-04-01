<template>
  <van-tabbar :fixed="false">
    <van-tabbar-item icon="hot-o" class="hot">热卖</van-tabbar-item>
    <van-tabbar-item icon="bars" @click="classproduct">分类</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      false: false
    }
  },
  methods: {
    classproduct: function () {
      this.$store.dispatch('showFooter')
    }
  }
}
</script>

<style scoped>
.hot{
  color: cornflowerblue;
}
</style>
