<script lang="ts" setup>
  import { Props } from './props'
  import { ref, computed, inject } from 'vue'
  import { FSvgIcon } from '../../../svg-icon'
  import { TREE_PROPS_KEY } from '../../src/props'
  import { FIconChevronRight } from '../../../_svg'
  import { useRun } from '../../../_hooks'
  import type { TreeItemModel } from './interface'
  import type { TreeProvide } from '../../index'

  const prop = defineProps(Props)

  defineOptions({ name: 'f-tree-item' })

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
</script>

<template>
  <li class="f-tree-item">
    <div
      :class="[
        'f-tree-item__label',
        {
          'f-tree-item__label-disabled': model.disabled
        }
      ]"
      :style="{ '--tree-item-level-padding': `${model.__level * 40}px` }"
      @click="toggle($event, model)"
    >
      <!-- 前缀 -->
      <div class="f-tree-item__label-prefix">
        <f-svg-icon
          v-if="isFolder"
          :class="{ 'f-tree-item__icon-animation': isOpen }"
          :size="17"
          :icon="FIconChevronRight"
        />
        {{ model.label }}
      </div>

      <!-- 操作栏 -->
      <div v-if="$slots.options" class="f-tree-item__label-option">
        <slot name="options" />
      </div>
    </div>

    <!-- 子组件 -->
    <f-collapse-animation :opened="isOpen" :animation-time="0.3">
      <ul v-if="isFolder" class="f-tree-item__children">
        <f-tree-item v-for="(item, index) in model.children" :key="index" :model="item">
          <template #options>
            <slot name="options" />
          </template>
        </f-tree-item>
      </ul>
    </f-collapse-animation>
  </li>
</template>
