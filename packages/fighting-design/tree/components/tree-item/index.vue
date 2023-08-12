<script lang="ts" setup>
  import { Props } from './props'
  import { ref, computed, inject } from 'vue'
  import { FSvgIcon } from '../../../svg-icon'
  import { TREE_PROPS_KEY } from '../../src/props'
  import { FIconChevronRight } from '../../../_svg'
  import { useRun } from '../../../_hooks'
  import { FCheckbox } from '../../../checkbox'
  import { isNumber } from '../../../_utils'
  import type { TreeItemModel } from './interface'
  import type { CSSProperties } from 'vue'
  import type { TreeProvide } from '../../index'

  const prop = defineProps(Props)

  defineOptions({ name: 'FTreeItem' })

  const { run } = useRun()

  /** 获取父组件注入的依赖项 */
  const parentInject: TreeProvide | null = inject(TREE_PROPS_KEY, null)

  /** 是否需要展开 */
  const isOpen = ref<boolean>(false)

  /** 是否带有子节点 */
  const isFolder = computed((): boolean => {
    return !!(prop.model.children && prop.model.children.length)
  })

  /**
   * 切换状态
   *
   * @param { Object } evt 事件对象
   * @param { Object } model 每一项参数镀锡
   */
  const toggle = (evt: MouseEvent, model: TreeItemModel): void => {
    if (model.disabled) {
      return
    }

    isOpen.value = !isOpen.value

    if (parentInject) {
      run(parentInject.onClickLabel, evt, model, isOpen.value, parentInject.tree)
    }
  }

  /** 计算偏移量 */
  const offset = computed((): number => {
    if (parentInject && isNumber(parentInject.offset) && parentInject.offset > 1) {
      return parentInject.offset
    }
    return 40
  })

  /** 计算没一行缩进距离样式 */
  const offsetSize = computed((): CSSProperties => {
    const { __level } = prop.model

    if (__level) {
      return { '--tree-item-level-padding': `${__level * offset.value}px` }
    }

    return {}
  })
</script>

<template>
  <div class="f-tree-item">
    <div
      :class="[
        'f-tree-item__label',
        {
          'f-tree-item__label-disabled': model.disabled
        }
      ]"
      :style="offsetSize"
      @click="toggle($event, model)"
    >
      <!-- 前缀 -->
      <div class="f-tree-item__label-prefix">
        <!-- 选择标签 -->
        <f-checkbox
          v-if="parentInject?.isCheck"
          :label="model.value || model.label"
          :disabled="model.disabled"
          :show-label="false"
        />

        <!-- 展示的箭头 icon -->
        <f-svg-icon
          v-if="isFolder"
          :class="{ 'f-tree-item__icon-animation': isOpen }"
          :size="15"
          :icon="FIconChevronRight"
        />

        <!-- 遍历中需要展示的 icon -->
        <f-svg-icon v-if="model.icon" :size="15" :icon="model.icon" />

        <!-- label 上的文字内容 -->
        <div class="f-tree-item__text">{{ model.label }}</div>
      </div>

      <!-- 操作栏 -->
      <div v-if="$slots.options" class="f-tree-item__label-option">
        <slot name="options" />
      </div>
    </div>

    <!-- 子组件 -->
    <f-collapse-animation :opened="isOpen" :animation-time="0.3">
      <div v-if="isFolder" class="f-tree-item__children">
        <f-tree-item v-for="(item, index) in model.children" :key="index" :model="item">
          <template #options>
            <slot name="options" />
          </template>
        </f-tree-item>
      </div>
    </f-collapse-animation>
  </div>
</template>
