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
    <div class="f-tree-item__label" @click="toggle">
      {{ model.label }}

      <f-svg-icon
        v-if="isFolder"
        :class="{ 'f-tree-item__icon-animation': isOpen }"
        :size="17"
        :icon="FIconChevronRight"
      />
    </div>

    <!-- 子组件 -->
    <ul v-show="isOpen" v-if="isFolder" class="f-tree-item__children">
      <f-tree-item v-for="(item, index) in model.children" :key="index" :model="item" />
    </ul>
  </li>
</template>
