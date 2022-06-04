import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw[] = [// 路由规则
  {
    path: '/:pathMatch(.*)',
    name: 'Home',
    component: () => import('../layout/default.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
