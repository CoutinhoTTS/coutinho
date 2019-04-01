<template>
  <div>
    <van-tabs v-model="productstyleid">
      <van-tab v-for="(item, index) in style" :title="item" :key="index">
        <Products></Products>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Products from '@/components/products/Products'
export default {
  name: 'ProductListTop',
  components: {
    Products
  },
  data () {
    return {
      style: ['ACE', '猎鹰', 'Messi', '刺客', '毒蜂', '传奇', '毒液'],
      productstyleid: ''
    }
  },
  created: function () {
    this.productstyleid = this.$route.params.id - 1
  }
}
</script>

<style scoped>

</style>
