<script lang="ts" setup>
  import { Props } from './props'
  defineProps(Props)
</script>

<template>
  <div class="f-waterfall">
    <img v-for="(img, index) in list" :key="index" :src="img" />
  </div>
</template>

<style lang="scss" scoped></style>
