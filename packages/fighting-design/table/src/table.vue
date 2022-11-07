<script lang="ts" setup name="FTable">
  import { Props } from './props'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  // import { TableColgroupVue } from './components'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { TablePropsType } from './interface'

  const prop: TablePropsType = defineProps(Props)

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { zebraColor, height } = prop

    return {
      '--f-table-zebra-color': zebraColor,
      '--f-table-height': sizeChange(height)
    } as CSSProperties
  })
</script>

<template>
  <div class="f-table" :style="styleList">
    <div class="f-table__container">
      <!-- 头部 -->
      <header v-if="height" class="f-table__header">
        <table class="f-table__table">
          <colgroup :align="align">
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th v-if="num">序号</th>
              <th
                v-for="(column, index) in columns"
                :key="index"
                colspan="1"
                rowspan="1"
              >
                {{ column.title }}
              </th>
            </tr>
          </thead>
        </table>
      </header>

      <!-- 身体 -->
      <main :class="['f-table__body', { 'f-table__body-margin': height }]">
        <table class="f-table__table">
          <colgroup :align="align">
            <col />
            <col />
            <col />
          </colgroup>
          <thead v-if="!height" :align="align">
            <tr>
              <th v-if="num">序号</th>
              <th v-for="(column, index) in columns" :key="index">
                {{ column.title }}
              </th>
            </tr>
          </thead>

          <tbody :align="align">
            <tr v-for="(dataItem, m) in data" :key="m">
              <td v-if="num">{{ m + 1 }}</td>
              <td v-for="(column, i) in columns" :key="i">
                {{ dataItem[column.key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  </div>
</template>
