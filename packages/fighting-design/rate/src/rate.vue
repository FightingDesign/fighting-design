<script lang="ts" setup name="FRate">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconStarBVue } from '../../_svg'
  import { FText } from '../../text'
  import { ref, watch, unref, computed } from 'vue'
  import type { Ref, ComputedRef } from 'vue'
  import type { OrdinaryFunctionInterface } from '../../_interface'
  import type {
    RateMouseoverInterface,
    RateHandleClickInterface,
    RatePropsType
  } from './interface'

  const prop: RatePropsType = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: number): number => val
  })

  const starValue: Ref<number> = ref<number>(prop.modelValue)

  // 反复移动时触发
  const onMouseover: RateMouseoverInterface = (index: number): void => {
    if (prop.readonly) return
    starValue.value = index
  }

  // 移出触发
  const onMouseout: OrdinaryFunctionInterface = (): void => {
    if (prop.readonly) return
    starValue.value = prop.modelValue
  }

  // 点击触发
  const handleClick: RateHandleClickInterface = (index: number): void => {
    if (prop.readonly) return
    starValue.value = index
    emit('update:modelValue', index)
    prop.change && prop.change(index)
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
