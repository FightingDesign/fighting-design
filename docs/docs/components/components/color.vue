<script lang="ts" setup>
  import { computed } from 'vue'
  import { ChangeColor } from '../../../../packages/fighting-design/_utils'
  import { FMessage } from '../../../../packages/fighting-design/index'
  import type { ComputedRef } from 'vue'

  const colorList: ComputedRef<string[][]> = computed((): string[][] => {
    const COLOR_LIST = ['#2d5af1', '#52b35e', '#ff0200', '#fcc202'] as const

    const allColorList: string[][] = COLOR_LIST.map(
      (item: string): string[] => {
        const series: string[] = []
        const changeColor: ChangeColor = new ChangeColor(item)
        for (let i = 0; i < 8; i++) {
          const background: string = changeColor.getLightColor(
            i === 0 ? 0 : i / 10 + 0.2
          )
          series.push(background)
        }
        return series
      }
    )
    return allColorList
  })

  const onCopy = (color: string): void => {
    const copyInput: HTMLInputElement = document.createElement('input')
    copyInput.value = color
    document.body.appendChild(copyInput)
    copyInput.select()
    document.execCommand('Copy')
    document.body.removeChild(copyInput)

    FMessage({
      message: '复制成功',
      type: 'primary'
    })
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
        @click="onCopy(color)"
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
