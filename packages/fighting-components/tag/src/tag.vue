<template>
  <div :class="cls" :style="sty">
    <span class="f-text">
      <f-icon v-if="leftIcon" size="15px" :icon="leftIcon" />
      <slot />
      <f-icon v-if="rightIcon" size="15px" :icon="rightIcon" />

      <f-icon
        v-if="closable"
        class="f-iolor"
        size="15px"
        icon="f-icon-close"
        @click="handleClose"
      />
    </span>
  </div>
</template>

<script lang="ts" setup name="FTag">
  import { Props, Emits } from './tag'
  import type { onClickInterface } from '@fighting-design/fighting-type'
  import { computed } from 'vue'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)
  const is_light = prop.simple
  const cls = computed(() => [
    'f-tag',
    is_light ? `f-tag-sim-${prop.type}` : `f-tag-${prop.type}`,
    {
      [`f-tag-${prop.size}`]: prop.size,
      'f-block': prop.block,
      'f-no-border': !prop.hit
    }
  ])

  let sty = {
    borderRadius: prop.round
  }

  if (prop.color) {
    sty = Object.assign(
      sty,
      is_light
        ? {
            color: prop.color,
            border: `1px solid ${prop.color}`,
            backgroundColor: '#fff'
          }
        : {
            backgroundColor: prop.color,
            color: '#fff',
            border: `1px solid ${prop.color}`
          }
    )
  }

  const handleClose = (evt: Event): void => {
    evt.stopPropagation()
    emit('close', evt)
  }
</script>
