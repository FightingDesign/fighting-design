<script lang="ts" setup name="FMain">
  import { Props } from './main'

  defineProps(Props)
</script>

<script lang="ts">
  export default {
    name: 'FMain'
  }
</script>

<template>
  <main class="f-main" :style="{ padding }">
    <slot />
  </main>
</template>
