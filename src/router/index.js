import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home/index.vue')
        },
        {
          path: 'category/:id',
          name: 'category',
          component: () => import('../views/Category/index.vue')
        },
        {
          path: 'category/sub/:id',
          name: 'sub',
          component: () => import('../views/SubCategory/index.vue')
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('../views/Detail/index.vue')
        },
        {
          path: 'cart-list',
          name: 'cart-list',
          component: () => import('../views/CartList/index.vue')
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('../views/Checkout/index.vue')
        },
        {
          path: 'pay',
          name: 'pay',
          component: () => import('../views/Pay/index.vue')
        },
        {
          path: 'paycallback',
          name: 'paycallback',
          component: () => import('../views/Pay/PayBack.vue')
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('../views/Member/index.vue'),
          children: [
            {
              path: '',
              name: 'user',
              component: () => import('../views/Member/components/User.vue')
            },
            {
              path: 'order',
              name: 'order',
              component: () => import('../views/Member/components/Order.vue')
            },
          ]
        },
        {
          path: 'test',
          name: 'test',
          component: () => import('../views/Test/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login/index.vue')
    }
  ],

  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
