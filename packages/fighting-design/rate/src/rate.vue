<script lang="ts" setup name="FRate">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { FIconStarBVue } from '../../_svg'
  import { FText } from '../../text'
  import { useRun } from '../../_hooks'
  import { ref, watch, unref, computed } from 'vue'
  import { isNumber } from '../../_utils'
  import { EMIT_UPDATE } from '../../_tokens'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (val: number): number => val
  })

  const { run } = useRun()

  /** 当前绑定的值 */
  const starValue = ref<number>(prop.modelValue)

  /**
   * 反复移动时触发
   *
   * @param { number } index 索引值
   */
  const onMouseover = (index: number): void => {
    if (prop.readonly) return
    starValue.value = index
  }

  /** 移出触发 */
  const onMouseout = (): void => {
    if (prop.readonly) return
    starValue.value = prop.modelValue
  }

  /**
   * 点击触发
   *
   * @param { number } index 索引值
   */
  const handleClick = (index: number): void => {
    if (prop.readonly) return
    starValue.value = index
    emit(EMIT_UPDATE, index)
    run(prop.onChange, index)
  }

  /** 监视如何绑定值发生变化的时候同步数据 */
  watch(
    (): number => prop.modelValue,
    (): void => {
      starValue.value = prop.modelValue
    }
  )

  /** 辅助文字内容 */
  const textContent = computed((): string => {
    return prop.textArr[unref(starValue) - 1]
  })

  /** 返回星星的最大数量 */
  const maxLength = computed((): number => (isNumber(prop.max) ? prop.max : 5))
</script>

<template>
  <div class="f-rate" role="slider">
    <div class="f-rate__list">
      <div
        v-for="(star, index) in maxLength"
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
