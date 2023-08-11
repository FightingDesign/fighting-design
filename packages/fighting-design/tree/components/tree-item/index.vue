<script lang="ts" setup>
  import { Props } from './props'
  import { ref, computed } from 'vue'
  import { FSvgIcon } from '../../../svg-icon'
  import { FIconChevronRight } from '../../../_svg'

  const prop = defineProps(Props)

  defineOptions({ name: 'f-tree-item' })

  /** 是否需要展开 */
  const isOpen = ref<boolean>(false)

  /** 是否带有子节点 */
  const isFolder = computed((): boolean => {
    return !!(prop.model.children && prop.model.children.length)
  })

  /** 切换状态 */
  const toggle = (): void => {
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <li class="f-tree-item">
    <div class="f-tree-item__label" @click.self="toggle">
      <!-- 前缀 -->
      <div class="f-tree-item__label-prefix" @click.self="toggle">
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
