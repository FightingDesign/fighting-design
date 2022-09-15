<script lang="ts" setup name="FExpandCard">
  import { computed, ref } from 'vue'
  import { Props } from './expand-card'
  import { FImage } from '../../image'
  import type { Ref, ComputedRef } from 'vue'
  import type { classListInterface as d } from '../../_interface'

  const prop = defineProps(Props)

  const currExpandIndex: Ref<number> = ref<number>(prop.expandIndex)

  const switchExpandCard = (index: number): void => {
    currExpandIndex.value = index
  }

  const activeClass = (index: number): string | void => {
    if (index !== currExpandIndex.value) return
    return 'f-expand-card-active'
  }

  const classList: ComputedRef<d> = computed((): d => {
    const { round } = prop

    return ['f-expand-card-item', { 'f-expand-card-round': round }] as const
  })
</script>

<template>
  <div class="f-expand-card">
    <div
      v-for="(item, index) in imageList"
      :key="index"
      :class="[activeClass(index), ...classList]"
      @click="switchExpandCard(index)"
    >
      <f-image :src="item.url" :alt="item.text || ''" />
      <h3 v-if="item.text" class="f-expand-card-item__title" :style="{ color }">
        {{ item.text }}
      </h3>
    </div>
  </div>
</template>
