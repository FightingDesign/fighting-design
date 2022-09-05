<script lang="ts" setup name="FIcon">
  import { Props, Emits } from './icon'
  import { computed } from 'vue'
  import type { CSSProperties, ComputedRef } from 'vue'
  import type { handleClickInterface as a } from './interface'
  import type { classListInterface as b } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    emit('click', evt)
  }

  const classList: ComputedRef<b> = computed((): b => {
    const { fontClass, icon } = prop

    return ['f-icon', icon, fontClass] as const
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { color, size } = prop

    return { color, fontSize: size } as const
  })
</script>

<template>
  <i :class="classList" :style="styleList" @click="handleClick">
    <slot />
  </i>
</template>
