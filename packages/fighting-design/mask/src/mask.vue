<script lang="ts" setup name="FMask">
  import { Props, Emits } from './mask'
  import type { OrdinaryFunctionInterface as a } from '../../_interface'
  import type { MaskHandleChangeInterface as b } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const closeMask: a = (): void => {
    if (!prop.maskClose) return
    emit('update:visible', false)
  }

  const handleOpen: b = (evt: MouseEvent): void => {
    emit('open', evt)
  }

  const handleOpenEnd: b = (evt: MouseEvent): void => {
    emit('open-end', evt)
  }

  const handleClose: b = (evt: MouseEvent): void => {
    emit('close', evt)
  }

  const handleCloseEnd: b = (evt: MouseEvent): void => {
    emit('close-end', evt)
  }
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="f-mask-fade"
      @before-enter="handleOpen"
      @after-enter="handleOpenEnd"
      @before-leave="handleClose"
      @after-leave="handleCloseEnd"
    >
      <div v-show="visible" class="f-mask" :style="{ zIndex }">
        <!-- 遮罩层 -->
        <div
          v-if="showMask"
          class="f-mask-mask"
          :style="{ background: maskBackground, opacity: maskOpacity }"
        />

        <!-- 主容器 -->
        <div class="f-mask-container" @click.self="closeMask">
          <div class="f-mask-wrapper">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
