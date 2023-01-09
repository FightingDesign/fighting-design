<script lang="ts" setup name="FTabs">
  import { Props } from './props'
  import { computed } from 'vue'
  import { TabsNav } from './components'
  import { useTabs } from '../../_hooks'
  import { warning, isNumber, isString } from '../../_utils'
  import type { TabsPosition, TabsModelValue } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: TabsModelValue): boolean => isNumber(val) || isString(val)
  })

  const { navs, activeName, setEdit, setActiveName } = useTabs(prop, emit)

  /** 选项卡标签位置 */
  const tabsPosition = computed((): TabsPosition => {
    const { position, type } = prop

    if (type === 'segment' && (position === 'right' || position === 'left')) {
      warning('FTabs', 'segment 风格只支持 top、bottom 两种方向')
      return 'top'
    }

    return position
  })

  /** 通过 refs 抛出当前选中的值 */
  defineExpose({ activeName })
</script>

<template>
  <div :class="['f-tabs', `f-tabs__${tabsPosition}`]">
    <tabs-nav
      v-if="navs.length"
      :navs="navs"
      :type="type"
      :active-name="activeName"
      :position="tabsPosition"
      :edit-status="editStatus"
      :justify-content="justifyContent"
      :trigger="trigger"
      :set-edit="setEdit"
      :set-active-name="setActiveName"
      :on-switch="onSwitch"
    >
      <!-- 前缀内容 -->
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>

      <!-- 后缀内容 -->
      <template v-if="$slots.suffix" #suffix>
        <slot name="suffix" />
      </template>
    </tabs-nav>

    <!-- 主要展示的内容 -->
    <div class="f-tabs__content">
      <slot />
    </div>
  </div>
</template>
