<template>
  <a
    :class="[
      'f-link',
      `f-link-${type}`,
      {
        'f-link-prohibit': prohibit
      }
    ]"
    :href="href"
    :target="target"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { Props, Emits } from './link'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

const onClick = (e: Event) => {
  if (prop.prohibit) {
    e.preventDefault()
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
