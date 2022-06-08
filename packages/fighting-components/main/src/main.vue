<template>
  <main class="f-main" :style="{ padding }">
    <slot />
  </main>
</template>

<script setup lang="ts" name="FMain">
  import { defineProps } from 'vue'
  import { Props } from './main'

  defineProps(Props)
</script>
