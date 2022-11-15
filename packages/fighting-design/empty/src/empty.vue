<script lang="ts" setup name="FEmpty">
  import { FIconEmptyState } from '../../_svg'
  import { Props } from './props'
  import { computed } from 'vue'
  import { FImage } from '../../image'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { EmptyPropsType } from './props'

  const prop: EmptyPropsType = defineProps(Props)

  /**
   * 样式列表
   */
  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { contentColor, contentSize } = prop

    return {
      color: contentColor,
      fontSize: contentSize
    } as const
  })
</script>

<template>
  <div class="f-empty" :style="{ background }">
    <!-- 图片 -->
    <div class="f-empty__pic-wrap">
      <slot v-if="$slots.image" name="image" />

      <template v-else>
        <f-image v-if="imageSrc" :src="imageSrc" :width="imageSize" />
        <f-icon-empty-state v-else />
      </template>
    </div>

    <!-- 描述文字 -->
    <span class="f-empty__desc" :style="styleList">
      {{ content }}
    </span>

    <!-- 自定义页脚 -->
    <div v-if="$slots.footer" class="f-empty__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
