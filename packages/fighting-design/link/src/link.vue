<script lang="ts" setup name="FLink">
  import { Props } from './props'
  import { reactive, toRefs } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { useList, useRun, useGlobal } from '../../_hooks'

  const prop = defineProps(Props)

  const { getType } = useGlobal(prop)

  /** 替换 type 后得到的 props */
  const params = reactive({
    ...toRefs(prop),
    type: getType('primary')
  })

  const { classes, styles } = useList(params, 'link')

  /**
   * 点击触发
   *
   * @param evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled || prop.noLink) {
      evt.preventDefault()
      return
    }
    useRun(prop.onClick, evt)
  }

  /** 类名列表 */
  const classList = classes(['type', 'state', 'disabled', 'noCopy'], 'f-link')

  /** 样式列表 */
  const styleList = styles(['size', 'color'])
</script>

<template>
  <a
    role="link"
    :class="classList"
    :style="styleList"
    :href="href"
    :disabled="disabled"
    :target="target"
    @click="handleClick"
  >
    <f-svg-icon v-if="$slots.beforeIcon || beforeIcon" :icon="beforeIcon" :size="size || 16">
      <slot name="beforeIcon" />
    </f-svg-icon>

    <slot />

    <f-svg-icon v-if="$slots.afterIcon || afterIcon" :icon="afterIcon" :size="size">
      <slot name="afterIcon" />
    </f-svg-icon>
  </a>
</template>
