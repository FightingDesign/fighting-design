<template>
  <a
    :class="[
      'f-link',
      `f-link-${type}`,
      {
        [`f-link-${state}`]: state,
        'f-link-prohibit': prohibit,
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
  import { Props, Emits } from './link'
  import type { onClickInterface } from '@fighting-design/fighting-type'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const onClick: onClickInterface = (evt: PointerEvent): void => {
    if (prop.prohibit || prop.noLink) {
      evt.preventDefault()
      return
    }
    emit('click', evt)
  }
</script>

<script lang="ts">
  export default {
    name: 'FLink'
  }
</script>
