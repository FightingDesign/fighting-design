<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref(50)
</script>

<template>
  <f-slider v-model="value"></f-slider>
</template>

<style lang="scss"></style>
