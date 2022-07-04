<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const closeDialog = () => {
    emit('update:visible', false)
  }
</script>

<template>
  <teleport to="body" :disabled="!prop.appendToBody">
    <transition
      name="f-dialog-fade"
      @before-enter="prop.open"
      @after-enter="prop.onOpen"
      @before-leave="prop.close"
      @after-leave="prop.onClose"
    >
      <div
        v-show="prop.visible"
        class="f-dialog"
        :class="{
          mask: prop.modal
        }"
        @click.self="prop.modalClose && closeDialog()"
      >
        <div
          class="dialog center"
          :class="{
            shadow: !prop.modal
          }"
          :style="{
            width: prop.width,
            marginTop: prop.top
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
    </transition>
  </teleport>
</template>
