import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        breadcrumb: "Home",
      },
    },
    {
      path: '/store',
      name: 'Store',
      component: ProductsView,
      meta: {
        breadcrumb: "Store",
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView,
      meta: {
        breadcrumb: "Cart",
      },
    },
  ],
})

export default router
