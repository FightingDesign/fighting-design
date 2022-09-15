<script lang="ts" setup name="FExpandCard">
  import { computed, ref } from 'vue'
  import { Props } from './expand-card'
  import type { FPropsType } from './expand-card'
  import type { Ref, ComputedRef } from 'vue'

  import type { classListInterface as d } from '../../_interface'

  const prop: FPropsType = defineProps(Props)

  let currExpandIndex: Ref<number> = ref<number>(prop.expandIndex)

  const switchExpandCard = (index): void => {
    currExpandIndex.value = index
  }

  const imageLen = ref(0)
  imageLen.value = (prop.imageList || []).length
  const nodeClassList: ComputedRef<d> = computed((): d => {
    const { round } = prop
    return [
      // 判断round是true或者是数字。就显示圆角
      round ? 'f-expand-card-round' : ''
    ] as const
  })
</script>

<template>
  <div class="f-expand-card">
    <div
      v-for="(cardItem, index) in imageList"
      :key="index"
      :style="[
        prop.round > 0 ? `border-radius:${prop.round}px` : '',
        `flex-grow:${index === currExpandIndex ? imageLen : ''}`
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
