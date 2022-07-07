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

  const open: transitionEventInterface = (evt: MouseEvent): void => {
    emit('open', evt)
  }

  const openEnd: transitionEventInterface = (evt: MouseEvent): void => {
    emit('open-end', evt)
  }

  const close: transitionEventInterface = (evt: MouseEvent): void => {
    emit('close', evt)
  }

  const closeEnd: transitionEventInterface = (evt: MouseEvent): void => {
    emit('close-end', evt)
  }
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
        :class="[
          'f-dialog-mask',
          {
            'f-dialog-mask-modal': modal
          }
        ]"
        :style="{ zIndex }"
        @click.self="modalClose && closeDialog()"
      >
        <div
          :class="[
            'f-dialog',
            {
              'f-dialog-shadow': !modal
            }
          ]"
          :style="{
            width,
            height,
            marginTop: top
          }"
        >
          <div class="f-dialog-header">
            <slot name="title">{{ title }}</slot>
            <div class="f-dialog-close" @click="closeDialog">
              <i :class="['f-icon', `${closeIcon || 'f-icon-close'}`]" />
            </div>
          </div>

          <div class="f-dialog-content">
            <slot />
          </div>

          <div class="f-dialog-footer">
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
