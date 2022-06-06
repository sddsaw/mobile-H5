
<template>
  <AppNavBarVue />

  <router-view v-slot="{ Component ,route}">
    <transition name="MainFade" mode="out-in">
      <KeepAlive :include="['home', 'message','shoppingCart','my']">
        <component :is="Component" :key="route.path" />
      </KeepAlive>
    </transition>
  </router-view>

  <AppTabbarVue />
</template>

<script setup lang="ts">
import AppTabbarVue from '@/components/AppTabbar.vue'
import AppNavBarVue from './components/AppNavBar.vue'

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
