<script lang="ts" setup name="FLink">
  import { Props, Emits } from './link'
  import type { handleClickInterface } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: handleClickInterface = (evt: Event): void => {
    if (prop.prohibit || prop.noLink) {
      evt.preventDefault()
      return
    }
    emit('click', evt)
  }
</script>

<template>
  <a
    :class="[
      'f-link',
      `f-link-${type}`,
      `f-link-${state}`,
      {
        'f-link-prohibit': prohibit,
        'f-link-noCopy': noCopy
      }
    ]"
    :style="{ fontSize: size, color }"
    :href="href"
    :target="target"
    @click="handleClick"
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
