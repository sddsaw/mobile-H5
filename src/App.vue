
<template>
  <!-- 公共头部 默认显示 若顶部有特殊需求 在路由meta中添加hideTopBar为false后在页面中单独引用 -->
  <!-- 当前全局加入判断如下： 若是微信浏览器打开本项目则不显示该顶部导航 -->
  <van-nav-bar
    :title="route.meta.title"
    left-arrow
    safe-area-inset-top
    z-index="999"
    :fixed="true"
    @click-left="onClickLeft"
    :placeholder="true"
  />
  <router-link to="/message">
    21
  </router-link>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="search">
      标签
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o">
      标签
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o">
      标签
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const active = 0
const onClickLeft = () => {
  history.back()
}
onMounted(() => {
  console.log(111)
  console.log(router)
  console.log(route)
  console.log('%cdev%cv1.0.0', 'padding:3px;color:white;background:#023047', 'padding:3px;color:white;background:#219ebc')
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
}

</style>
