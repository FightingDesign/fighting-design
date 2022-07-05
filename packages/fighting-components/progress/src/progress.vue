<script lang="ts" setup name="FProgress">
  import type { CSSProperties } from 'vue'
  import { computed } from 'vue'
  import { Props, Emits } from './progress'

  const props = defineProps(Props)

  defineEmits(Emits)

  const wrapperStyles = computed<CSSProperties>(() => ({
    width: `${props.width}px`,
    height: `${props.height}px`,
    backgroundColor: props.background
  }))

  const innerStyles = computed<CSSProperties>(() => ({
    width: `${props.percentage}%`,
    backgroundColor: props.color
  }))
</script>

<template>
  <div
    :class="[
      'f-progress',
      `f-progress--${type}`,
      {
        'is-linear': linear,
        'is-square': square
      }
    ]"
    :aria-value="percentage"
    :aria-valuemin="0"
    :aria-valuemax="100"
    role="progressbar"
  >
    <div class="f-progress-bar">
      <div class="f-progress-bar__wrapper" :style="wrapperStyles">
        <div class="f-progress-bar__inner" :style="innerStyles">
          <div
            v-if="showText || $slots.default"
            class="f-progress-bar__innerText"
          >
            <slot :percentage="percentage">
              <span>{{ percentage }}%</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
