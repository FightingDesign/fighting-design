<script lang="ts" setup name="FRate">
  import { Props, Emits } from './rate'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconStarBVue } from '../../_components/svg/index'
  import { FText } from '../../text'
  import { ref, watch, unref, computed } from 'vue'
  import type { Ref, ComputedRef } from 'vue'
  import type { OrdinaryFunctionInterface as a } from '../../_interface'
  import type {
    OnMouseoverInterface as b,
    OnHandleClickInterface as c
  } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const starValue: Ref<number> = ref<number>(prop.modelValue)

  // 反复移动时触发
  const onMouseover: b = (index: number): void => {
    if (prop.readonly) return
    starValue.value = index
  }

  // 移出触发
  const onMouseout: a = (): void => {
    if (prop.readonly) return
    starValue.value = prop.modelValue
  }

  // 点击触发
  const handleClick: c = (index: number): void => {
    if (prop.readonly) return
    starValue.value = index
    emit('update:modelValue', index)
    emit('change', index)
  }

  watch(
    (): number => prop.modelValue,
    (): void => {
      starValue.value = prop.modelValue
    }
  )

  // 辅助文字内容
  const textContent: ComputedRef<string> = computed((): string => {
    return prop.textArr[unref(starValue) - 1]
  })
</script>

<template>
  <div class="f-rate" role="slider">
    <div class="f-rate__list">
      <div
        v-for="(star, index) in max"
        :key="index"
        :class="['f-rate__star', { 'f-rate__star-readonly': readonly }]"
        @mouseout="onMouseout"
        @mouseover="onMouseover(index + 1)"
        @click="handleClick(index + 1)"
      >
        <f-svg-icon
          :size="size"
          :icon="icon || FIconStarBVue"
          :color="starValue > index ? effectColor : invalidColor"
        />
      </div>
    </div>

    <f-text v-if="textShow" :size="textSize" :color="textColor">
      {{ textContent }}
    </f-text>
  </div>
</template>
