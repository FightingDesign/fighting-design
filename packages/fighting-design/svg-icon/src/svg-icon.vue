<script lang="ts" setup name="FSvgIcon">
  import { Props, Emits } from './svg-icon'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { HandleEventInterface as a } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    emit('click', evt)
  }

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    return {
      fontSize: sizeChange(prop.size),
      color: prop.color
    } as const
  })
</script>

<template>
  <i
    class="f-svg-icon"
    :style="styleList"
    text-indent="middle"
    @click="handleClick"
  >
    <component :is="icon" v-if="icon" />
    <slot v-else />
  </i>
</template>
