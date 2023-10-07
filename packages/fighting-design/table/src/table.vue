<script lang="ts" setup>
  import { Props } from './props'
  import { h } from 'vue'
  import { useList } from '../../_hooks'
  import { TableColgroupVue } from '../components'
  import { isFunction } from '../../_utils'
  import type { VNode } from 'vue'
  import type {
    TableColumns,
    TableRender,
    TableHeaderRender,
    TableRenderH
  } from './interface'

  defineOptions({ name: 'FTable' })

  const prop = defineProps(Props)

  const { styles, classes } = useList(prop, 'table')

  /**
   * 处理自定义渲染内容
   *
   * @param { Function } render 渲染函数
   */
  const columnsSlotData = (
    slotRender: TableRender,
    dataItem: Record<string, unknown>,
    index: number,
    headerItem: TableColumns
  ): VNode => {
    return slotRender(h as TableRenderH, dataItem, index, headerItem)
  }

  const columnsSlotHeader = (
    headerRender: TableHeaderRender,
    headerItem: TableColumns,
    index: number
  ): VNode => {
    return headerRender(h as TableRenderH, headerItem, index)
  }

  /** 样式列表 */
  const styleList = styles(['zebraColor', 'bgColor', 'headBgColor', 'height'])

  /** 类名列表 */
  const classList = classes(['border', 'zebra'], 'f-table')
</script>

<template>
  <div role="table" :class="classList" :style="styleList">
    <div class="f-table__container">
      <!-- 内置数据驱动表格 -->
      <template v-if="columns || data">
        <!-- 在限制高度时展示的头部 -->
        <header v-if="height && showHead" class="f-table__header">
          <table class="f-table__table">
            <table-colgroup-vue :columns="columns" />

            <thead :align="align">
              <tr>
                <th v-if="num">序号</th>
                <th v-for="(column, index) in columns" :key="index">
                  <!-- 如果是一个函数，则调用方法 -->
                  <template v-if="isFunction(column.title)">
                    <component :is="columnsSlotHeader(column.title, column, index)" />
                  </template>

                  <!-- 否则全部当字符串处理 -->
                  <template v-else>
                    {{ column.title }}
                  </template>
                </th>
              </tr>
            </thead>
          </table>
        </header>

        <!-- 身体 -->
        <main class="f-table__body">
          <table class="f-table__table">
            <table-colgroup-vue :columns="columns" />

            <!-- 在没有限制高度时候展示的表头 -->
            <thead v-if="!height && showHead" :align="align">
              <tr>
                <th v-if="num">序号</th>
                <th v-for="(column, index) in columns" :key="index">
                  <!-- 如果是一个函数，则调用方法 -->
                  <template v-if="isFunction(column.title)">
                    <component :is="columnsSlotHeader(column.title, column, index)" />
                  </template>

                  <!-- 否则全部当字符串处理 -->
                  <template v-else>
                    {{ column.title }}
                  </template>
                </th>
              </tr>
            </thead>

            <!-- 主要渲染内容的表体 -->
            <tbody v-if="data.length" :align="align">
              <tr v-for="(item, m) in data" :key="m">
                <!-- 序号列表 -->
                <td v-if="num">{{ m + 1 }}</td>

                <!-- 主内容 -->
                <td v-for="(column, i) in columns" :key="i">
                  <!-- 如果有自定义插槽渲染 -->
                  <template v-if="column.render">
                    <component :is="columnsSlotData(column.render, item, m, column)" />
                  </template>

                  <!-- 普通渲染数据 -->
                  <template v-else>
                    <template v-if="column.key">
                      {{ item[column.key] }}
                    </template>
                  </template>
                </td>
              </tr>
            </tbody>

            <!-- 自定义也叫 -->
            <tfoot v-if="$slots.tfoot">
              <slot name="tfoot" />
            </tfoot>
          </table>
        </main>
      </template>

      <!-- 原生驱动表格 -->
      <table v-else>
        <slot />
      </table>
    </div>
  </div>
</template>
