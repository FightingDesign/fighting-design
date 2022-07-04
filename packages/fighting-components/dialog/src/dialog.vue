<script lang="ts" setup name="FDialog">
  import { computed } from 'vue'
  import { Props, Emits } from './dialog'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)
  const closeDialog = async () => {
    if (typeof prop.beforeClose === 'function') {
      prop.beforeClose()
    }
    if (typeof prop.beforeCloseSync === 'function') {
      await prop.beforeCloseSync()
    }
    emit('update:visible', false)
  }
  const computedIcon = computed(() => {
    // 是一个图片 url，渲染 img 标签
    if (
      /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(
        prop.closeIcon
      )
    ) {
      // TODO 硬编码
      return null
    } else {
      // 渲染字符
      return prop.closeIcon
    }
  })
</script>

<template>
  <div
    v-show="prop.visible"
    class="f-dialog mask"
    @click.self="!!prop.modalClose && closeDialog()"
  >
    <div
      class="dialog center"
      :style="{
        width: prop.width + 'px',
        marginTop: prop.top ? prop.top + 'px' : '13vh'
      }"
    >
      <div class="header">
        <slot name="header">
          {{ prop.title }}
        </slot>
        <div class="close" @click="closeDialog">
          <slot name="closeIcon">
            <template v-if="computedIcon">
              {{ computedIcon }}
            </template>
            <template v-else>
              <img class="close" :src="(computedIcon as string)" alt="" />
            </template>
          </slot>
        </div>
      </div>
      <div class="content">
        <slot>
          {{ prop.text }}
        </slot>
      </div>
      <div class="footer">
        <slot name="footer">
          <f-button size="mini" type="default" @click="closeDialog"
          >取消</f-button
          >
          <f-button size="mini" type="primary">确认</f-button>
        </slot>
      </div>
    </div>
  </div>
</template>
