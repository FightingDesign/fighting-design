<script lang="ts" setup name="FLink">
  import { Props, Emits } from './link'
  import FIcon from '../../icon'
  import type { handleClickInterface as a } from './interface'
  import type { FPropsType } from './link'

  const prop: FPropsType = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: Event): void => {
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
    <f-icon v-if="leftIcon" :icon="leftIcon" :size="size" />
    <slot />
    <f-icon v-if="rightIcon" :icon="leftIcon" :size="size" />
  </a>
</template>
