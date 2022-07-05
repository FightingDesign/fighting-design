<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'
  import type {
    transitionEventInterface,
    closeDialogInterface
  } from './interface'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const closeDialog: closeDialogInterface = (): void => {
    emit('update:visible', false)
  }

  const open: transitionEventInterface = (): void => emit('open')

  const openEnd: transitionEventInterface = (): void => emit('open-end')

  const close: transitionEventInterface = (): void => emit('close')

  const closeEnd: transitionEventInterface = (): void => emit('close-end')
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="f-dialog-fade"
      @before-enter="open"
      @after-enter="openEnd"
      @before-leave="close"
      @after-leave="closeEnd"
    >
      <div
        v-show="visible"
        class="f-dialog"
        :class="{
          mask: modal
        }"
        @click.self="modalClose && closeDialog()"
      >
        <div
          class="dialog center"
          :class="{
            shadow: !modal
          }"
          :style="{
            width,
            marginTop: top
          }"
        >
          <div class="header">
            <slot name="header">
              {{ title }}
            </slot>
            <div class="close" @click="closeDialog">
              <slot name="closeIcon">
                <f-icon size="11px" icon="f-icon-close" />
              </slot>
            </div>
          </div>
          <div class="content">
            <slot>
              {{ text }}
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
