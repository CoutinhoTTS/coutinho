import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import ProductList from '@/components/productlist/ProductList'
import ProductData from '@/components/productdata/ProductData'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/productlist/:id',
      name: 'productList',
      component: ProductList
    },
    {
      path: '/productdata/:id',
      name: 'ProductData',
      component: ProductData
    }
  ]
})
