<template>
  <!-- 公共头部 默认显示 若顶部有特殊需求 在路由meta中添加hideTopBar为false后在页面中单独引用 -->
  <!-- 当前全局加入判断如下： 若是微信浏览器打开本项目则不显示该顶部导航 -->
  <van-nav-bar
    :title="route.meta.title"
    :left-arrow="route.meta.leftArrow"
    safe-area-inset-top
    z-index="999"
    :fixed="true"
    @click-left="onClickLeft"
    :placeholder="true"
  />
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const onClickLeft = () => {
  history.back()
}
</script>
