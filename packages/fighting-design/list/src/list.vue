<script lang="ts" setup>
  import { Props, LIST_PROPS_KEY } from './props'
  import { provide } from 'vue'
  import { useList } from '../../_hooks'

  defineOptions({ name: 'FList' })

  const prop = defineProps(Props)

  provide(LIST_PROPS_KEY, prop)

  const { classes, styles } = useList(prop, 'list')

  /** 样式列表 */
  const style = styles(['borderColor', 'maxHeight', 'zebraColor'])

  /** 类名列表 */
  const classList = classes(['zebra', 'center', 'size'], 'f-list')
</script>

<template>
  <ul role="list" :class="classList" :style>
    <header v-if="$slots.header" class="f-list__header">
      <slot name="header" />
    </header>

    <slot />

    <footer v-if="$slots.footer" class="f-list__footer">
      <slot name="footer" />
    </footer>
  </ul>
</template>
