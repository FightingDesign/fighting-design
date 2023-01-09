<script lang="ts" setup name="FTabs">
  import { Props } from './props'
  import { computed } from 'vue'
  import { TabsNav } from './components'
  import { useTabs } from '../../_hooks'
  import type { ClassList } from '../../_interface'
  import type { TabsPosition, TabsModelValue } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    'update:modelValue': (val: TabsModelValue): TabsModelValue => val
  })

  const { navs, currentName, edit, setCurrentName } = useTabs(prop, emit)

  /** 选项卡标签位置 */
  const tabsPosition = computed((): TabsPosition => {
    const { position, type } = prop

    if (type === 'segment' && (position === 'right' || position === 'left')) {
      // debugWarn('FTabs', 'segment 风格只支持 top、bottom 两种方向')
      return 'top'
    }

    return position
  })

  /** 类名列表 */
  const classList = computed((): ClassList => {
    return ['f-tabs', `f-tabs__${tabsPosition.value}`] as const
  })

  /** 通过 refs 抛出当前选中的值 */
  defineExpose({ currentName })
</script>

<template>
  <div :class="classList">
    <tabs-nav
      v-if="navs.length"
      :navs="navs"
      :type="type"
      :current-name="currentName"
      :position="tabsPosition"
      :edit-status="editStatus"
      :justify-content="justifyContent"
      :trigger="trigger"
      :on-switch="onSwitch"
      :set-current-name="setCurrentName"
      :set-edit="edit"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>

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
