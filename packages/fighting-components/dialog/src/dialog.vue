<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'

  const prop = defineProps(Props)
  defineEmits(Emits)
</script>

<template>
  <div
    class="f-dialog"
    :style="{
      width: prop.width + 'px'
    }"
  >
    <div class="header">
      <slot name="header">
        {{ prop.title }}
      </slot>
      <div class="close">
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
        <f-button size="mini" type="default">取消</f-button>
        <f-button size="mini" type="primary">确认</f-button>
      </slot>
    </div>
  </div>
</template>
