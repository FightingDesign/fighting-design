<script lang="ts" setup>
  import { Props } from './props'
  import { useList } from '../../_hooks'
  import { useSlots, ref, onMounted } from 'vue'
  import { debounce } from '../../_utils'

  defineOptions({ name: 'FEllipsis' })

  const prop = defineProps(Props)
  const { styles } = useList(prop, 'ellipsis')

  /** 样式列表 */
  let styleList = ref(styles(['lineClamp', 'maxWidth'], ['lineClamp']))

  /** 获取插槽文案*/
  const slotContent = useSlots().default?.()[0].children

  /** 判断是否需要显示toolTip, 出现...的时候展示，反之不展示*/
  const fEllipsisRef = ref<HTMLDivElement | undefined>()
  const isShowTip = ref(false)

  const judgeEllipsis = (): void => {
    if (fEllipsisRef.value) {
      isShowTip.value = fEllipsisRef.value.clientHeight < fEllipsisRef.value.scrollHeight
    }
  }

  // 监听元素宽度，重新计算是否需要显示tooltip
  onMounted(() => {
    const resizeObserver = new ResizeObserver(
      debounce(() => {
        judgeEllipsis()
      })
    )
    resizeObserver.observe(fEllipsisRef.value as Element)
  })

  /** toggle expand */
  const handleClick = (): void => {
    if (!prop.toggleClick) {
      return
    }
    setLineClamp()
  }

  const setLineClamp = (): void => {
    if (styleList.value['--ellipsis-line-clamp']) {
      styleList.value['--ellipsis-line-clamp'] = 0
    } else {
      styleList.value['--ellipsis-line-clamp'] = prop.lineClamp
    }
  }
</script>

<template>
  <f-tooltip
    v-bind="$attrs"
    :content="slotContent"
    :disabled="!prop.toolTip || !isShowTip || prop.toggleClick"
  >
    <div ref="fEllipsisRef" class="f-ellipsis" :style="styleList" @click="handleClick">
      <slot></slot>
    </div>
  </f-tooltip>
</template>
