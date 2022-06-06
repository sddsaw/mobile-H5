<template>
  <div class="container-wrap">
    homepage
    <p v-for="item in 100" :key="item">
      1
    </p>
  </div>
</template>
<!-- https://blog.csdn.net/qq_36773704/article/details/125037819 -->
<!-- 要么就不使用setup -->
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
