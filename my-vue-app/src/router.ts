import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/ProductList/ProductList.vue'

const routes = [
    { 
        path: '/',
        name: 'ProductList', 
        component: ProductList
    },
    { 
        path: '/wishlist',
        name: 'Wishlist', 
        component: () => import('./components/Wishlist/Wishlist.vue')
    },
    {
        path: '/product/:code',
        name: 'ProductDetail',
        component: () => import('./components/ProductDetail/ProductDetail.vue')
    }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  export default router