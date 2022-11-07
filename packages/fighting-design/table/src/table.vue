<script lang="ts" setup name="FTable">
  import { Props } from './props'
  import { computed } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { TablePropsType } from './interface'

  const prop: TablePropsType = defineProps(Props)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { border, zebra } = prop

      return [
        'f-table__container',
        {
          'f-table__border': border,
          'f-table__zebra': zebra
        }
      ] as const
    }
  )

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { zebraColor } = prop

    return {
      '--f-table-zebra-color': zebraColor
    } as CSSProperties
  })
</script>

<template>
  <div class="f-table">
    <table border="0" :class="classList" :style="styleList">
      <!-- 头部 -->
      <thead class="f-table__thead" :align="align">
        <tr class="f-table__tr">
          <th v-if="num" class="f-table__th">序号</th>
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="f-table__th"
          >
            {{ column.title }}
          </th>
        </tr>
      </thead>

      <!-- 身体 -->
      <tbody class="f-table__tbody" :align="align">
        <tr v-for="(dataItem, m) in data" :key="m" class="f-table__tr">
          <td v-if="num" class="f-table__td">{{ m + 1 }}</td>
          <td v-for="(column, i) in columns" :key="i" class="f-table__td">
            {{ dataItem[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
