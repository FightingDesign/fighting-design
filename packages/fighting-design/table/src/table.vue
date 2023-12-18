<script lang="ts" setup>
  import { Props } from './props'
  import { h, computed } from 'vue'
  import { useList } from '../../_hooks'
  // import { FEmpty } from '../../empty'
  import { isFunction, sizeChange } from '../../_utils'
  import type { VNode } from 'vue'
  import type {
    TableColumns,
    TableRenderData,
    TableRenderTitle,
    TableRender
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
    render: TableRenderData,
    row: Record<string, any>,
    column: TableColumns,
    index: number
  ): VNode => {
    return render(h as TableRender, row, column, index)
  }

  /**
   * 处理自定义渲染内容
   *
   * @param { Function } render 渲染函数
   */
  const columnsSlotHeader = (
    render: TableRenderTitle,
    item: TableColumns,
    index: number
  ): VNode => {
    return render(h as TableRender, item, index)
  }

  /** 样式列表 */
  const styleList = styles(['zebraColor', 'bgColor', 'headBgColor', 'height'])

  /** 类名列表 */
  const classList = classes(['border', 'zebra'], 'f-table')

  /** 是否显示表头 */
  const isHead = computed((): boolean => {
    return !!(prop.height && prop.showHead)
  })
</script>

<template>
  <div role="table" :class="classList" :style="styleList">
    <!-- 主要容器 -->
    <div class="f-table__container">
      <!-- 内置数据驱动表格 -->
      <template v-if="columns || data">
        <!-- 在限制高度时展示的头部 -->
        <div v-if="isHead" class="f-table__header">
          <table class="f-table__table">
            <!--
              为表格的列定义属性，从而方便对表格列的样式和其他属性进行统一设置
              https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/colgroup
             -->
            <colgroup>
              <col v-if="num" />
              <col
                v-for="(column, index) in columns"
                :key="index"
                :span="index + 1"
                :width="column.width"
              />
            </colgroup>

            <thead :align="align">
              <tr>
                <th v-if="num">#</th>
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
        </div>

        <!-- 身体 -->
        <div class="f-table__body">
          <!-- 有数据 -->
          <table class="f-table__table" :style="{ width: sizeChange(width) }">
            <colgroup>
              <col v-if="num" />
              <col
                v-for="(column, index) in columns"
                :key="index"
                :span="1"
                :width="column.width"
              />
            </colgroup>

            <!-- 在没有限制高度时候展示的表头 -->
            <thead v-if="!isHead" :align="align">
              <tr>
                <th v-if="num">#</th>
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
            <tbody v-if="data && data.length" ref="tableRef" :align="align">
              <tr v-for="(item, m) in data" :key="m">
                <!-- 序号列表 -->
                <td v-if="num">{{ m + 1 }}</td>

                <!-- 主内容 -->
                <td v-for="(column, i) in columns" :key="i">
                  <!-- 如果有自定义插槽渲染 -->
                  <template v-if="column.render">
                    <component :is="columnsSlotData(column.render, item, column, m)" />
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

            <!-- 没有数据 -->
            <!-- <tfoot v-else>
              <slot>
                <f-empty content="暂无数据" />
              </slot>
            </tfoot> -->

            <!-- 自定义也叫 -->
            <tfoot v-if="$slots.tfoot">
              <slot name="tfoot" />
            </tfoot>
          </table>
        </div>
      </template>

      <!-- 原生驱动表格 -->
      <table v-else>
        <slot />
      </table>
    </div>
  </div>
</template>
