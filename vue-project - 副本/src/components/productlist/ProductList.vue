<template>
  <div>
    <ProductListTop></ProductListTop>
    <Footer></Footer>
  </div>
</template>

<script>
import ProductListTop from '@/components/productlisttop/ProductListTop'
import Footer from '@/components/footer/Footer'
export default {
  name: 'ProductList',
  components: {
    ProductListTop,
    Footer
  }
}
</script>

<style scoped>

</style>
