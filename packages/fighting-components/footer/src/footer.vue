<template>
  <footer class="f-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script setup lang="ts" name="FFooter">
  import { Props } from './footer'

  defineProps(Props)
</script>
