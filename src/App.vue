
<template>
  <AppNavBarVue />
  <router-view />
  <AppTabbarVue />
</template>

<script setup lang="ts">
import AppTabbarVue from '@/components/AppTabbar.vue'
import AppNavBarVue from './components/AppNavBar.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.log(111)
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
