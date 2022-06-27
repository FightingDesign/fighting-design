<template>
  <footer class="f-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script setup lang="ts">
  import { Props } from './footer'

  defineProps(Props)
</script>

<script lang="ts">
  export default {
    name: 'FFooter'
  }
</script>
