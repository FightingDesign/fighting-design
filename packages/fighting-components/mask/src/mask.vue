<script lang="ts" setup name="FMask">
  import { Props, Emits } from './mask'
  import type {
    transitionEventInterface,
    handleCloseInterface
  } from './interface'

  defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClose: handleCloseInterface = (evt: MouseEvent): void => {
    emit('click-modal', evt)
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
      name="f-mask"
      :duration="400"
      @before-enter="open"
      @after-enter="openEnd"
      @before-leave="close"
      @after-leave="closeEnd"
    >
      <div
        v-show="visible"
        :class="[
          'f-mask',
          {
            'f-mask-modal': modal
          }
        ]"
        :style="{ zIndex }"
        @click.self="handleClose"
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>
