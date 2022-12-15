<script lang="ts" setup name="FForm">
  import { Props } from './props'

  defineProps(Props)
</script>

<template>
  <form class="f-form">
    <slot />
  </form>
</template>
