<template>
  <a :class="['f-link']" :href="href" @click="onClick">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { Props, Emits } from './link'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

const onClick = (e: Event) => {
  if (prop.prohibit) {
    return
  }
  emit('click', e)
}
</script>

<script lang="ts">
export default {
  name: 'FLink'
}
</script>
