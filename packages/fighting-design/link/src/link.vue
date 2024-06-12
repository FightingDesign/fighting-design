<script lang="ts" setup>
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { useList, useRun, useGlobal } from '../../_hooks'

  defineOptions({ name: 'FLink' })

  const prop = defineProps(Props)

  const { getProp } = useGlobal(prop)
  const { run } = useRun()
  const { classes, styles } = useList(getProp(['type'], ['primary']), 'link')

  /**
   * 点击触发
   *
   * @param { Object } evt 事件对象
   */
  const handleClick = (evt: MouseEvent): void => {
    if (prop.disabled || prop.noLink) {
      /**
       * 阻止默认事件
       *
       * @see event.preventDefault https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
       */
      evt.preventDefault()
    }

    // 只有在禁用状态下需要返回，跳转状态下继续执行事件
    if (prop.disabled) {
      return
    }

    run(prop.onClick, evt)
  }

  /** 类名列表 */
  const classList = classes(['type', 'state', 'disabled', 'noCopy'], 'f-link')

  /** 样式列表 */
  const style = styles(['size', 'color', 'hoverColor'])
</script>

<template>
  <div role="link" :class="classList" :style="style">
    <a class="f-link__a" :href="href" :target="target" @click.stop="handleClick">
      <f-svg-icon v-if="beforeIcon" :icon="beforeIcon" :size />

      <slot />

      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size />
    </a>
  </div>
</template>
