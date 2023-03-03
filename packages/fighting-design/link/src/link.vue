<script lang="ts" setup name="FLink">
  import { Props } from './props'
  import { reactive, toRefs } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { useList, useRun, useGlobal } from '../../_hooks'

  const prop = defineProps(Props)

  const { getType } = useGlobal(prop)
  const { run } = useRun()

  /** 替换 type 后得到的 props */
  const params = reactive({
    ...toRefs(prop),
    type: getType('primary')
  })

  const { classes, styles } = useList(params, 'link')

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
      return
    }
    run(prop.onClick, evt)
  }

  /** 类名列表 */
  const classList = classes(['type', 'state', 'disabled', 'noCopy'], 'f-link')

  /** 样式列表 */
  const styleList = styles(['size', 'color', 'hoverColor'])
</script>

<template>
  <div role="link" :class="classList" :style="styleList">
    <a class="f-link__a" :href="href" :target="target" @click="handleClick">
      <f-svg-icon v-if="beforeIcon" :icon="beforeIcon" :size="size" />

      <slot />

      <f-svg-icon v-if="afterIcon" :icon="afterIcon" :size="size" />
    </a>
  </div>
</template>
