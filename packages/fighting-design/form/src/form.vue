<script lang="ts" setup name="FForm">
  import { Props, FORM_PROVIDE_KEY } from './props'
  import { provide } from 'vue'

  const prop = defineProps(Props)

  provide(FORM_PROVIDE_KEY, prop)
</script>

<template>
  <form class="f-form">
    <slot />
  </form>
</template>
