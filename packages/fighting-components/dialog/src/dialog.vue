<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const closeDialog = async (): Promise<void> => {
    if (typeof prop.beforeClose === 'function') {
      prop.beforeClose()
    }
    if (typeof prop.beforeCloseSync === 'function') {
      await prop.beforeCloseSync()
    }
    emit('update:visible', false)
  }
</script>

<template>
  <div
    v-show="prop.visible"
    class="f-dialog mask"
    @click.self="prop.modalClose && closeDialog()"
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
            <f-icon size="11px" icon="f-icon-close" />
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
          <f-button size="mini" type="default" @click="closeDialog">
            取消
          </f-button>
          <f-button size="mini" type="primary">确认</f-button>
        </slot>
      </div>
    </div>
  </div>
</template>
