<script lang="ts" setup>
  import { Props } from './props'
  import { h, computed, ref, watch } from 'vue'
  import { useList, useRun } from '../../_hooks'
  import { FEmpty } from '../../empty'
  import { FCheckbox } from '../../checkbox'
  import { isFunction, isArray } from '../../_utils'
  import type { VNode } from 'vue'
  import type {
    TableColumns,
    TableRenderData,
    TableRenderTitle,
    TableRender,
    TableData
  } from './interface'

  defineOptions({ name: 'FTable' })

  const prop = defineProps(Props)

  const { run } = useRun()
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
  const style = styles(['zebraColor', 'bgColor', 'headBgColor', 'height', 'width'])

  /** 类名列表 */
  const classList = classes(['border', 'zebra'], 'f-table')

  /** 是否显示表头 */
  const isHead = computed((): boolean => {
    return !!(prop.height && prop.showHead)
  })

  /** 格式化后的数据 */
  const formatData = ref<TableData>([])

  /** 是否选中所有 */
  const isSelectAll = computed({
    get: (): boolean => {
      if (!formatData.value.length) {
        return false
      }
      return (formatData.value || []).every(item => item._select)
    },
    set: (value: boolean): boolean => {
      /** 改变全部的状态 */
      const selectList: TableData = (formatData.value || []).map(item => {
        item._select = value
        return item
      })

      formatData.value = selectList

      checkboxChange() // 执行回调方法
      return value
    }
  })

  /** 设置格式化后的数据方法 */
  const setFormData = (): void => {
    if (!isArray(prop.data)) {
      formatData.value = []
    }

    if (prop.select) {
      const selectData = prop.data.map(item => {
        return {
          ...item,
          _select: false
        }
      })

      formatData.value = selectData
      return
    }

    formatData.value = prop.data
  }

  // 设置格式化后的数据方法
  watch(() => prop.data, setFormData, { immediate: true })

  /** 选择器切换触发 */
  const checkboxChange = (): void => {
    /** 获取到所有选中的 */
    const activeList: TableData = (formatData.value || []).filter(item => item._select)

    run(prop.onSelect, activeList)
  }
</script>

<template>
  <div role="table" :class="classList" :style>
    <!-- 主要容器 -->
    <div class="f-table__container">
      <!-- 内置数据驱动表格 -->
      <template v-if="columns || formatData">
        <!-- 在限制高度时展示的头部 -->
        <div v-if="isHead" class="f-table__header">
          <table class="f-table__table">
            <!--
              为表格的列定义属性，从而方便对表格列的样式和其他属性进行统一设置
              https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/colgroup
             -->
            <colgroup>
              <col v-if="select" :width="50" :span="1" />
              <col v-if="num" :width="50" :span="1" />
              <col
                v-for="(column, index) in columns"
                :key="index"
                :width="column.width"
              />
            </colgroup>

            <thead :align="align">
              <tr>
                <th v-if="select">
                  <f-checkbox v-model="isSelectAll" :disabled="!formatData.length" />
                </th>
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
          <table v-if="formatData && formatData.length" class="f-table__table">
            <colgroup>
              <col v-if="select" :width="50" :span="1" />
              <col v-if="num" :width="50" :span="1" />
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
                <th v-if="select">
                  <f-checkbox v-model="isSelectAll" :disabled="!formatData.length" />
                </th>
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
            <tbody :align="align">
              <tr v-for="(item, m) in formatData" :key="m">
                <td v-if="select">
                  <f-checkbox v-model="item._select" :on-change="checkboxChange" />
                </td>
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

            <!-- 自定义也叫 -->
            <tfoot v-if="$slots.tfoot">
              <slot name="tfoot" />
            </tfoot>
          </table>

          <!-- 没有数据 -->
          <template v-else>
            <!-- 有数据 -->
            <table class="f-table__table">
              <colgroup>
                <col v-if="select" :width="50" :span="1" />
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
                  <th v-if="select">
                    <f-checkbox v-model="isSelectAll" :disabled="!formatData.length" />
                  </th>
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

            <!-- 没有数据 -->
            <div class="table__no-data">
              <slot name="noData">
                <f-empty content="暂无数据" />
              </slot>
            </div>
          </template>
        </div>
      </template>

      <!-- 原生驱动表格 -->
      <table v-else>
        <slot />
      </table>
    </div>
  </div>
</template>
