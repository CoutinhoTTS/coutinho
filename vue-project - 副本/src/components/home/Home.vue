<template>
  <div>
    <Swipe></Swipe>
    <Search></Search>
    <Tabbar></Tabbar>
    <Products></Products>
    <Footer></Footer>
    <Popup></Popup>
  </div>
</template>

<script>
import Swipe from '@/components/swipe/Swipe'
import Products from '@/components/products/Products'
import Search from '@/components/search/Search'
import Footer from '@/components/footer/Footer'
import Tabbar from '@/components/tabbar/Tabbar'
import Popup from '@/components/popup/Popup'
import ProductListTop from '@/components/productlisttop/ProductListTop'
export default {
  name: 'Home',
  components: {
    Swipe,
    Products,
    Search,
    Footer,
    Tabbar,
    Popup,
    ProductListTop
  }
}
</script>

<style scoped>

</style>
