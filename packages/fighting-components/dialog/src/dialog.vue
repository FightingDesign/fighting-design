<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)
  const closeDialog = () => {
    emit('update:visible', false)
  }
</script>

<template>
  <div
    v-show="prop.visible"
    class="f-dialog"
    :style="{
      width: prop.width + 'px'
    }"
  >
    <div
      v-if="prop.modal"
      class="mask"
      @click="!!prop.modalClose && closeDialog()"
    />
    <div class="dialog">
      <div class="header">
        <slot name="header">
          {{ prop.title }}
        </slot>
        <div class="close" @click="closeDialog">
          <slot name="closeIcon">
            <!-- TODO icon -->
            x
          </slot>
        </div>
      </div>
      <div class="content">
        <slot name="content">
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
