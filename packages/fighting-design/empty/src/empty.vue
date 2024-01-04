<script lang="ts" setup>
  import { Props } from './props'
  import { FIconFullSharp } from '../../_svg'
  import { computed } from 'vue'
  import { useList, useGlobal } from '../../_hooks'
  import { FSvgIcon } from '../../svg-icon'
  import { FImage } from '../../image'

  defineOptions({ name: 'FEmpty' })

  const prop = defineProps(Props)

  const { styles } = useList(prop, 'empty')

  const { getLang } = useGlobal()

  /** 主要的描述文字内容 */
  const contentText = computed((): string => {
    return prop.content || getLang('empty').value.content
  })

  /** 样式列表 */
  const style = styles(['contentColor', 'contentSize', 'background'])
</script>

<template>
  <div class="f-empty" :style>
    <!-- 图片 -->
    <div class="f-empty__wrapper">
      <slot v-if="$slots.default" />

      <template v-else>
        <f-image v-if="imageSrc" :src="imageSrc" :width="imageSize" />
        <f-svg-icon v-else :icon="FIconFullSharp" :size="iconSize" />
      </template>
    </div>

    <!-- 描述文字 -->
    <span class="f-empty__content">{{ contentText }}</span>

    <!-- 自定义页脚 -->
    <div v-if="$slots.footer" class="f-empty__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
