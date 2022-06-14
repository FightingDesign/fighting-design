<template>
  <main class="f-main" :style="{ padding }">
    <slot />
  </main>
</template>

<script setup lang="ts">
  import { Props } from './main'

  defineProps(Props)
</script>

<script lang="ts">
  export default {
    name: 'FMain'
  }
</script>
