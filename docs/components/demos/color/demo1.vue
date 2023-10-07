<script lang="ts" setup>
  import { computed } from 'vue'
  import { useColor } from '../../../../packages/fighting-design/_hooks'
  import { onCopy } from '../utils/copy'
  import type { ComputedRef } from 'vue'

  const colorList: ComputedRef<string[][]> = computed((): string[][] => {
    const COLOR_LIST = ['#2d5af1', '#52b35e', '#ff0200', '#fcc202'] as const

    const allColorList: string[][] = COLOR_LIST.map((item: string): string[] => {
      const series: string[] = []
      const { getLight } = useColor(item)

      for (let i = 0; i < 8; i++) {
        const background: string = getLight(i === 0 ? 0 : i / 10 + 0.2)
        series.push(background)
      }
      return series
    })
    return allColorList
  })

  const handleClick = (color: string): void => {
    onCopy(color)
  }
</script>

<template>
  <div class="f-color-box">
    <div v-for="(item, index) in colorList" :key="index" class="f-color-list">
      <div
        v-for="(color, i) in item"
        :key="i"
        class="f-color-item"
        :style="{ background: color }"
        @click="handleClick(color)"
      >
        <f-text>{{ color }}</f-text>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .f-color-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .f-color-item {
      width: 150px;
      height: 60px;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;

      .f-text {
        cursor: pointer;
      }
    }
  }
</style>
