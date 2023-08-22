<script lang="ts" setup>
  import { ref } from 'vue'

  const isOpen = ref(false)
</script>

<template>
  <f-switch v-model="isOpen" size="middle" />

  <f-collapse-animation :opened="isOpen" :animation-time="8" :width-animation="true" :height-animation="true">
    <div class="box"></div>
  </f-collapse-animation>
</template>

<style>
  .box {
    width: 500px;
    height: 600px;
    background: orange;
  }
</style>
