<template>
  <div class="container-wrap">
    homepage
    <!-- <p v-for="item in 100" :key="item">
      1
    </p> -->
    <router-link to="/order">
      order
    </router-link>
  </div>
</template>
<!-- https://blog.csdn.net/qq_36773704/article/details/125037819 -->
<!-- 要么就不使用setup -->
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  data () {
    return {

    }
  }

})

</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
