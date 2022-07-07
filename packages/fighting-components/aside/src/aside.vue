<script lang="ts" setup>
  import { Props } from './aside'

  defineProps(Props)
</script>

<script lang="ts">
  export default {
    name: 'FAside'
  }
</script>

<template>
  <aside class="f-aside" :style="{ width }">
    <slot />
  </aside>
</template>
