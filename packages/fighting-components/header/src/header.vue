<script lang="ts" setup>
  import { Props } from './header'

  defineProps(Props)
</script>

<script lang="ts">
  export default {
    name: 'FHeader'
  }
</script>

<template>
  <header class="f-header" :style="{ height }">
    <slot />
  </header>
</template>
