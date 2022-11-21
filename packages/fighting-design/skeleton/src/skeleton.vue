<script lang="ts" setup name="FSkeleton">
  import { Props } from './props'
  import { computed, useSlots } from 'vue'
  import type { ComputedRef } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { SkeletonPropsType } from './props'

  const prop: SkeletonPropsType = defineProps(Props)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { round, animated, size } = prop

      return [
        'f-skeleton',
        {
          'f-skeleton__round': round,
          'f-skeleton__animated': animated,
          [`f-skeleton__${size}`]: size
        }
      ] as const
    }
  )

  /**
   * 如果 loading 为 true，展示骨架屏
   *
   * 否则展示插槽内容
   */
  const isRender: ComputedRef<boolean> = computed((): boolean => {
    const slots = useSlots()

    // 判断是否有插槽
    if (slots.default) {
      return prop.loading === true
    }
    return true
  })
</script>

<template>
  <template v-if="isRender">
    <div v-for="n in rows" :key="n" :class="classList" v-bind="$attrs" />
  </template>

  <slot v-else />
</template>
