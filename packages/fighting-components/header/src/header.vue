<template>
  <header class="f-header" :style="{ height }">
    <slot />
  </header>
</template>

<script lang="ts" setup name="FHeader">
  import { Props } from './header'

  defineProps(Props)
</script>
