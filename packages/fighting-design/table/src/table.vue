<script lang="ts" setup name="FTable">
  import { Props } from './props'
  import { ref, h } from 'vue'
  import { useList } from '../../_hooks'
  import { TableColgroupVue } from './components'
  import type { VNode } from 'vue'

  const prop = defineProps(Props)

  const { styles, classes } = useList(prop, 'table')

  /** 多选项 */
  const optionalList = ref(false)

  /**
   * 处理自定义渲染内容
   *
   * @param { Function } target 渲染函数
   */
  const columnsSlotData = (target: Function): VNode => {
    return target(h)
  }

  /** 样式列表 */
  const styleList = styles(['zebraColor', 'bgColor', 'headBgColor', 'height'])

  /** 类名列表 */
  const classList = classes(['border', 'zebra'], 'f-table')
</script>

<template>
  <div role="table" :class="classList" :style="styleList">
    <div class="f-table__container">
      <template v-if="columns || data">
        <!-- 在限制高度时展示的头部 -->
        <header v-if="height && showHead" class="f-table__header">
          <table class="f-table__table">
            <table-colgroup-vue :columns="columns" />

            <thead :align="align">
              <tr>
                <th v-if="num">序号</th>
                <th v-if="optional">选择</th>
                <th v-for="(column, index) in columns" :key="index">
                  {{ column.title }}
                </th>
              </tr>
            </thead>
          </table>
        </header>

        <!-- 身体 -->
        <main :class="['f-table__body', { 'f-table__body-margin': height && showHead }]">
          <table class="f-table__table">
            <table-colgroup-vue :columns="columns" />

            <!-- 在没有限制高度时候展示的表头 -->
            <thead v-if="!height && showHead" :align="align">
              <tr>
                <th v-if="num">序号</th>
                <th v-if="optional">选择</th>
                <th v-for="(column, index) in columns" :key="index">
                  {{ column.title }}
                </th>
              </tr>
            </thead>

            <!-- 主要渲染内容的表体 -->
            <tbody v-if="data.length" :align="align">
              <tr v-for="(item, m) in data" :key="m">
                <!-- 多选框 -->
                <td v-if="optional">
                  <f-checkbox
                    v-model="optionalList"
                    :show-label="false"
                    :label="(m + 1).toString()"
                  />
                </td>

                <!-- 序号列表 -->
                <td v-if="num">{{ m + 1 }}</td>

                <!-- 主内容 -->
                <td v-for="(column, i) in columns" :key="i">
                  <!-- 如果有自定义插槽渲染 -->
                  <template v-if="column.render">
                    <component :is="columnsSlotData(column.render)" />
                  </template>

                  <!-- 普通渲染数据 -->
                  <template v-else>
                    {{ item[column.key] }}
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </template>

      <!-- 基础的 -->
      <table v-else>
        <slot />
      </table>
    </div>
  </div>
</template>
