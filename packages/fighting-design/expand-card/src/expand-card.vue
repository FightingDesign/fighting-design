<script lang="ts" setup name="FExpandCard">
  import { computed, ref } from 'vue'
  import { Props } from './props'
  import { sizeChange, isString } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type {
    ExpandCardISwitchExpandCardInterface,
    ExpandCardImageListItemInterface,
    ExpandCardPropsType
  } from './interface'

  const prop: ExpandCardPropsType = defineProps(Props)

  const currExpandIndex: Ref<number> = ref<number>(prop.expandIndex)

  const switchExpandCard: ExpandCardISwitchExpandCardInterface = (
    index: number
  ): void => {
    currExpandIndex.value = index
  }

  const activeClass = (index: number): string | void => {
    if (index !== currExpandIndex.value) return
    return 'f-expand-card__active'
  }

  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { round } = prop

      return ['f-expand-card__item', { 'f-expand-card__round': round }] as const
    }
  )

  const imageListArr = computed((): ExpandCardImageListItemInterface[] => {
    const { imageList } = prop

    return imageList.map(
      (
        item: string | ExpandCardImageListItemInterface
      ): ExpandCardImageListItemInterface => {
        if (isString(item)) {
          return { url: item } as ExpandCardImageListItemInterface
        }
        return item as ExpandCardImageListItemInterface
      }
    )
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, height } = prop

    return {
      width: sizeChange(width),
      height: sizeChange(height)
    } as const
  })
</script>

<template>
  <div class="f-expand-card" :style="styleList">
    <div
      v-for="(item, index) in imageListArr"
      :key="index"
      :class="[activeClass(index), ...classList]"
      :style="{ backgroundImage: `url(${item.url})` }"
      @click="switchExpandCard(index)"
    >
      <h3 v-if="item.text" class="f-expand-card__title" :style="{ color }">
        {{ item.text }}
      </h3>
    </div>
  </div>
</template>
