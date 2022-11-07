<script lang="ts" setup name="FTable">
  import { Props } from './props'
  import { computed } from 'vue'
  import type { ClassListInterface } from '../../_interface'
  import type { ComputedRef } from 'vue'
  import type { TablePropsType, TableColumnsInterface } from './interface'

  const prop: TablePropsType = defineProps(Props)

  /**
   * 类名列表
   */
  const classList: ComputedRef<ClassListInterface> = computed(
    (): ClassListInterface => {
      const { align, border } = prop

      return [
        'f-table__container',
        {
          'f-table__border': border,
          [`f-table__${align}`]: align
        }
      ] as const
    }
  )

  const columnsResult: ComputedRef<TableColumnsInterface[]> = computed(
    (): TableColumnsInterface[] => {
      const { num, columns } = prop

      if (num) {
        columns.unshift({
          title: '序号',
          key: 'num'
        })
      }

      return columns
    }
  )

  /**
   * 计算头部的数据
   */
  const dateResult = computed(() => {
    const { num, data } = prop

    if (!num) return data

    return data.map((column, index: number) => {
      return {
        ...column,
        num: index + 1
      } as const
    })
  })
</script>

<template>
  <div class="f-table">
    <table border="0" cellspacing="0" cellpadding="0" :class="classList">
      <!-- 头部 -->
      <thead class="f-table__thead">
        <tr class="f-table__tr">
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
      <tbody class="f-table__tbody">
        <tr v-for="(dataItem, m) in dateResult" :key="m" class="f-table__tr">
          <td v-for="(column, i) in columnsResult" :key="i" class="f-table__td">
            {{ dataItem[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
