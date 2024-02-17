import { createRouter, createWebHistory } from 'vue-router'
import allproducts from '../components/allproducts.vue'
import addproduct from '../views/addproduct.vue'
import updateproduct from '../views/upadeproduct.vue'
import cart from '../views/cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allproducts',
      component: allproducts
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/addproduct',
      name: ' addproduct',
      component: addproduct
    },
    {
      path: '/updateproduct',
      name: ' updateproduct',
      component: updateproduct
    },
    {
      path: '/updateproduct/:id',
      name: ' updateproduct',
      component: updateproduct
    },
  ]
})

export default router
