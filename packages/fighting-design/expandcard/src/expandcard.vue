<template>
  <div class="f-expand-card">
    <div
      v-for="(cardItem,index) in imageList"
      :key="index"
      @click="switchExpandCard(index)"
      :style="[prop.round > 0?`border-radius:${prop.round}px`:'',`flex-grow:${index === currExpandIndex?imageLen:''}`]"
      :class="['f-expand-card-item',{'active':index === currExpandIndex},...nodeClassList]"
    >
      <img :src="cardItem.url" :alt="cardItem.text||''" />
      <h3
        class="f-expand-card-item__title"
        v-if="cardItem.text"
        :style="{color:prop.color}"
      >{{cardItem.text}}</h3>
    </div>
  </div>
</template>
<script lang="ts" setup name="FExpandCard">
import { computed, ComputedRef, ref } from 'vue'
import { Props } from './expandcard'
import type { FPropsType } from './expandcard'
import type { Ref } from 'vue'

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
  let roundCls = ''
  return [
    // 判断round是true或者是数字。就显示圆角
    round ? 'f-expand-card-round' : ''
  ] as const
})
</script>


