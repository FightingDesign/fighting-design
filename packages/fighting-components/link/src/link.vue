<template>
  <a
    :class="[
      'f-link',
      `f-link-${type}`,
      `f-link-${hover}`,
      {
        'f-link-prohibit': prohibit,
        'f-link-underline': underline,
        'f-link-noCopy': noCopy
      }
    ]"
    :style="{ fontSize: size, color }"
    :href="href"
    :target="target"
    @click="onClick"
  >
    <i
      v-if="leftIcon"
      :class="`f-icon ${leftIcon}`"
      :style="{ fontSize: size }"
    />
    <slot />
    <i
      v-if="rightIcon"
      :class="`f-icon ${rightIcon}`"
      :style="{ fontSize: size }"
    />
  </a>
</template>

<script lang="ts" setup>
import { FIcon } from '../../icon'
import { Props, Emits } from './link'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

interface onClickInterface {
  (evt: Event): void
}

const onClick: onClickInterface = (e: Event): void => {
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
