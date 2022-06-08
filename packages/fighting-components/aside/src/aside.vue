<template>
  <aside class="f-aside" :style="{ width }">
    <slot />
  </aside>
</template>

<script lang="ts" setup name="FAside">
  import { Props } from './aside'

  defineProps(Props)
</script>
