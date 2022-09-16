<script lang="ts" setup name="FExpandCard">
  import { computed, ref } from 'vue'
  import { Props } from './expand-card'
  import { isString } from '../../_utils'
  import type { Ref, ComputedRef, CSSProperties } from 'vue'
  import type { classListInterface as a } from '../../_interface'
  import type {
    switchExpandCardInterface as b,
    imageListInterface as c
  } from './interface'

  const prop = defineProps(Props)

  const currExpandIndex: Ref<number> = ref<number>(prop.expandIndex)

  const switchExpandCard: b = (index: number): void => {
    currExpandIndex.value = index
  }

  const activeClass = (index: number): string | void => {
    if (index !== currExpandIndex.value) return
    return 'f-expand-card-active'
  }

  const classList: ComputedRef<a> = computed((): a => {
    const { round } = prop

    return ['f-expand-card-item', { 'f-expand-card-round': round }] as const
  })

  const imageListArr = computed((): c[] => {
    const { imageList } = prop

    return imageList.map((item: string | c): c => {
      if (isString(item)) {
        return { url: item } as c
      }
      return item as c
    })
  })

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { width, height } = prop

    return {
      width: isString(width) ? width : width + 'px',
      height: isString(height) ? height : height + 'px'
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
      <h3 v-if="item.text" class="f-expand-card-title" :style="{ color }">
        {{ item.text }}
      </h3>
    </div>
  </div>
</template>
