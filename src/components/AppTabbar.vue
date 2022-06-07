<template>
  <!-- v-if="tabbarActiveList.includes(route.meta.tabbarActive || 5) " -->
  <van-tabbar v-model="route.meta.tabbarActive" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item
      :to="item.nextUrl"
      :icon="item.icon"
      :badge="item.badge"
      v-for="(item,index) in tabbarList"
      :key="index"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang='ts' setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// const tabbarActiveList:Array<number> = [0, 1, 2, 3]
const tabbarList = reactive(
  [
    {
      icon: 'wap-home-o',
      badge: '',
      title: '首页',
      nextUrl: '/'
    },
    {
      icon: 'chat-o',
      badge: '1',
      title: '消息',
      nextUrl: '/message'
    },
    {
      icon: 'shopping-cart-o',
      badge: '3',
      title: '购物车',
      nextUrl: '/shoppingCart'
    },
    {
      icon: 'contact',
      badge: '',
      title: '我的',
      nextUrl: '/my'
    }
  ]
)
console.log(tabbarList)
</script>

<style lang='scss' scoped>
</style>
