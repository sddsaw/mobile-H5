<template>
  <div class="container-wrap">
    homepage
  </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(111)

  console.log('%cdev%cv1.0.0', 'padding:3px;color:white;background:#023047', 'padding:3px;color:white;background:#219ebc')
})
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
