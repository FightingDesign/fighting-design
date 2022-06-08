<template>
  <main class="f-main">
    <slot />
  </main>
</template>

<script setup lang="ts" name="FMain">
  import { defineProps } from 'vue'
  import { Props } from './main'

  defineProps(Props)
</script>
