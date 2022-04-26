<template>
  <button>
    {{ msg }}
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { prop } from './prop'

const props = defineProps(prop)
</script>

<script lang="ts">
export default {
  name: 'FiButton'
}
</script>
