<script lang="ts" setup name="FEmpty">
  import emptySvgVue from '../../_components/empty-svg.vue'
  import { Props } from './empty'
  import { computed } from 'vue'
  import { FImage } from '../../image'
  import type { ComputedRef, CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const customContentStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { contentColor, contentSize } = prop

      return {
        color: contentColor,
        fontSize: contentSize
      } as const
    }
  )
</script>

<template>
  <div class="f-empty" :style="{ background }">
    <!-- 图片 -->
    <div class="f-empty__pic-wrap">
      <slot v-if="$slots.image" name="image" />

      <template v-else>
        <f-image v-if="imageSrc" :src="imageSrc" :width="imageSize" />
        <empty-svg-vue v-else />
      </template>
    </div>

    <!-- 描述文字 -->
    <span class="f-empty__desc" :style="customContentStyleList">
      {{ content }}
    </span>

    <!-- 自定义页脚 -->
    <div v-if="$slots.footer" class="f-empty__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
