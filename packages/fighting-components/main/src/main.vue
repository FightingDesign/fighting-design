<template>
  <main class="f-main" :style="{ padding }">
    <slot />
  </main>
</template>

<script setup lang="ts" name="FMain">
  import { Props } from './main'

  defineProps(Props)
</script>
