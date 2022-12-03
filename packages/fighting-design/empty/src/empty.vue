<script lang="ts" setup name="FEmpty">
  import { Props } from './props'
  import { FIconFullSharp } from '../../_svg'
  import { computed } from 'vue'
  import { FSvgIcon } from '../../svg-icon'
  import { FImage } from '../../image'
  import { sizeChange } from '../../_utils'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  /**
   * 样式列表
   */
  const styleList = computed((): CSSProperties => {
    const { contentColor, contentSize } = prop

    return {
      color: contentColor,
      fontSize: sizeChange(contentSize)
    } as const
  })
</script>

<template>
  <div class="f-empty" :style="{ background }">
    <!-- 图片 -->
    <div class="f-empty__wrapper">
      <slot v-if="$slots.default" />

      <template v-else>
        <f-image v-if="imageSrc" :src="imageSrc" :width="imageSize" />
        <f-svg-icon v-else :icon="FIconFullSharp" :size="iconSize" />
      </template>
    </div>

    <!-- 描述文字 -->
    <span class="f-empty__content" :style="styleList">
      {{ content }}
    </span>

    <!-- 自定义页脚 -->
    <div v-if="$slots.footer" class="f-empty__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
