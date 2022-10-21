<script lang="ts" setup name="FCloseBtn">
  import { Props, Emits } from './close-btn'
  import { FSvgIcon } from '../../svg-icon'
  import { computed } from 'vue'
  import { FIconCrossVue } from '../../_components/svg/index'
  import type { ComputedRef } from 'vue'
  import type {
    HandleEventInterface as a,
    ClassListInterface as b
  } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    if (prop.disabled) return
    emit('click', evt)
  }

  const classList: ComputedRef<b> = computed((): b => {
    return [
      {
        'f-close-btn': !prop.disabled,
        'f-close-btn__round': prop.round,
        'f-close-btn__disabled': prop.disabled
      } as const
    ] as const
  })
</script>

<template>
  <div role="button" :class="classList" @click="handleClick">
    <f-svg-icon :size="size" :color="color">
      <component :is="icon" v-if="icon" />
      <slot v-else>
        <f-icon-cross-vue />
      </slot>
    </f-svg-icon>
  </div>
</template>
