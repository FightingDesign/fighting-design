<script lang="ts" setup name="FPopup">
  import { Props, Emits } from './popup'
  import { computed } from 'vue'
  import { sizeChange } from '../../_utils'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { OrdinaryFunctionInterface as a } from '../../_interface'
  import type { PopupHandleChangeInterface as b } from './interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const closePopup: a = (): void => {
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

  const wrapperStyleList: ComputedRef<CSSProperties> = computed(
    (): CSSProperties => {
      const { direction, popupSize, padding } = prop

      if (direction === 'top' || direction === 'bottom') {
        return {
          height: sizeChange(popupSize),
          padding: sizeChange(padding)
        } as const
      }

      return {
        width: sizeChange(popupSize),
        padding: sizeChange(padding)
      } as const
    }
  )
</script>

<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      :name="direction === 'center' ? 'f-popup-center' : 'f-popup-other'"
      @before-enter="handleOpen"
      @after-enter="handleOpenEnd"
      @before-leave="handleClose"
      @after-leave="handleCloseEnd"
    >
      <div v-show="visible" class="f-popup" :style="{ zIndex }">
        <!-- 遮罩层 -->
        <div
          v-if="showMask"
          :class="['f-popup__mask', { 'f-popup__blur': maskBlur }]"
          :style="{ background: maskBackground, opacity: maskOpacity }"
        />

        <!-- 主容器 -->
        <div
          :class="[
            'f-popup__container',
            { [`f-popup__container-${direction}`]: direction }
          ]"
          @click.self="closePopup"
        >
          <div class="f-popup__wrapper" :style="wrapperStyleList">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
