<template>
  <button>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { prop } from './prop'

defineOptions({
  name: 'FiButton'
})

const props = defineProps(prop)

</script>
