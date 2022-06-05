import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw[] = [
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../pages/tabbar/homePage/index.vue'),
    meta: {
      title: '首页',
      transition: 'slide-left', // 切换页面的动画
      hideTopBar: true, // 隐藏顶部默认导航栏
      needLogin: true, // 进入该页面是否需要登录
      keepAlive: false // 是否缓存本页面
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../pages/tabbar/message/index.vue'),
    meta: {
      title: '消息',
      transition: 'slide-left', // 切换页面的动画
      hideTopBar: true, // 隐藏顶部默认导航栏
      needLogin: true, // 进入该页面是否需要登录
      keepAlive: false // 是否缓存本页面
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../pages/tabbar/my/index.vue'),
    meta: {
      title: '我的',
      transition: 'slide-left', // 切换页面的动画
      hideTopBar: true, // 隐藏顶部默认导航栏
      needLogin: true, // 进入该页面是否需要登录
      keepAlive: false // 是否缓存本页面
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/order/index.vue'),
    meta: {
      title: '其他',
      transition: 'slide-left', // 切换页面的动画
      hideTopBar: true, // 隐藏顶部默认导航栏
      needLogin: true, // 进入该页面是否需要登录
      keepAlive: false // 是否缓存本页面
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'errorPage',
    component: () => import('../pages/errorPage.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
