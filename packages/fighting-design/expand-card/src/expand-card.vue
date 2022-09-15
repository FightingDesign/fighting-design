<script lang="ts" setup name="FExpandCard">
  import { computed, ref } from 'vue'
  import { Props } from './expand-card'
  import type { Ref, ComputedRef } from 'vue'
  import type { classListInterface as d } from '../../_interface'

  const prop = defineProps(Props)

  const currExpandIndex: Ref<number> = ref<number>(prop.expandIndex)

  const switchExpandCard = (index: number): void => {
    currExpandIndex.value = index
  }

  const nodeClassList: ComputedRef<d> = computed((): d => {
    const { round } = prop

    return [{ 'f-expand-card-round': round }] as const
  })
</script>

<template>
  <div class="f-expand-card">
    <div
      v-for="(cardItem, index) in imageList"
      :key="index"
      :style="[
        prop.round > 0 ? `border-radius:${prop.round}px` : '',
        `flex-grow:${index === currExpandIndex ? imageList.length : ''}`
      ]"
      :class="[
        'f-expand-card-item',
        { active: index === currExpandIndex },
        ...nodeClassList
      ]"
      @click="switchExpandCard(index)"
    >
      <img :src="cardItem.url" :alt="cardItem.text || ''">
      <h3
        v-if="cardItem.text"
        class="f-expand-card-item__title"
        :style="{ color }"
      >
        {{ cardItem.text }}
      </h3>
    </div>
  </div>
</template>
