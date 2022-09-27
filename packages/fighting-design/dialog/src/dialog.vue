<script lang="ts" setup name="FDialog">
  import { Props, Emits } from './dialog'
  import { FIcon } from '../../icon'
  import type {
    handleEventInterface as a,
    ordinaryFunctionInterface as b
  } from '../../_interface'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const closeDialog: b = (): void => {
    emit('update:visible', false)
  }

  const handleOpen: a = (evt: MouseEvent): void => {
    emit('open', evt)
  }

  const handleOpenEnd: a = (evt: MouseEvent): void => {
    emit('open-end', evt)
  }

  const handleClose: a = (evt: MouseEvent): void => {
    emit('close', evt)
  }

  const handleCloseEnd: a = (evt: MouseEvent): void => {
    emit('close-end', evt)
  }
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="f-dialog-fade"
      @before-enter="handleOpen"
      @after-enter="handleOpenEnd"
      @before-leave="handleClose"
      @after-leave="handleCloseEnd"
    >
      <div
        v-show="visible"
        :class="[
          'f-dialog-mask',
          {
            'f-dialog-mask-modal': modal,
            'f-dialog-mask-blur': modalBlur
          }
        ]"
        :style="{ zIndex }"
        @click.self="modalClose && closeDialog()"
      >
        <div
          role="dialog"
          :class="[
            'f-dialog',
            visible ? 'f-dialog-scale-in' : 'f-dialog-scale-out',
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
          <header class="f-dialog-header">
            <slot name="title">{{ title }}</slot>
            <f-icon :icon="closeIcon || 'f-icon-close'" @click="closeDialog" />
          </header>

          <section v-if="$slots.default" class="f-dialog-body">
            <slot />
          </section>

          <footer v-if="$slots.footer" class="f-dialog-footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </transition>
  </teleport>
</template>
