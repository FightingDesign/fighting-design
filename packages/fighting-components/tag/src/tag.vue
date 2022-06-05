<template>
  <div
    :class="[
      'f-tag',
      {
        [`f-tag-${size}`]: size
      }
    ]"
    :style="
      is_light
        ? { color, border: `1px solid ${color}`, backgroundColor: '#fff' }
        : {
            backgroundColor: color,
            color: '#fff',
            border: `1px solid ${color}`
          }
    "
  >
    <span :class="['f-text']">
      <slot />
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
  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const is_light = prop.theme === 'light'

  const handleClose: onClickInterface = function (event: PointerEvent) {
    event.stopPropagation()
    emit('close', event)
  }
</script>
