<script lang="ts" setup name="FDrawer">
  import { Props } from './props'
  import { isBoolean } from '../../_utils'
  import { useEmit } from '../../_hooks'
  import { watch, ref } from 'vue'
  import { FCloseBtn } from '../../close-btn'
  import { FPopup } from '../../popup'
  import type { Ref } from 'vue'
  import type { OrdinaryFunctionInterface } from '../../_interface'
  import type { DrawerPropsType } from './props'

  const prop: DrawerPropsType = defineProps(Props)
  const emit = defineEmits(
    useEmit((visible: boolean): boolean => isBoolean(visible), 'visible')
  )

  const isVisible: Ref<boolean> = ref<boolean>(prop.visible)

  /**
   * 关闭 drawer
   */
  const closeDrawer: OrdinaryFunctionInterface = (): void => {
    emit('update:visible', false)
  }

  /**
   * 监视 isVisible，如果变为假，则关闭
   */
  watch(
    (): boolean => isVisible.value,
    (newVal: boolean): void => {
      if (!newVal) {
        closeDrawer()
      }
    }
  )

  /**
   * 监视 prop.visible，同步数据给 isVisible
   */
  watch(
    (): boolean => prop.visible,
    (newVal: boolean): void => {
      isVisible.value = newVal
    }
  )
</script>

<template>
  <f-popup
    v-model:visible="isVisible"
    :append-to-body="appendToBody"
    :show-mask="showMask"
    :mask-close="maskClose"
    :z-index="zIndex"
    :mask-blur="maskBlur"
    :direction="direction"
    :popup-size="size"
    :open="open"
    :open-end="openEnd"
    :close="close"
    :close-end="closeEnd"
  >
    <div class="f-drawer">
      <!-- 头部 -->
      <header class="f-drawer__header">
        <slot name="header">
          <span class="f-drawer__header-title">{{ title }}</span>
          <f-close-btn
            v-if="showCloseIcon"
            :icon="closeIcon"
            @click="closeDrawer"
          >
            <slot name="closeIcon" />
          </f-close-btn>
        </slot>
      </header>

      <!-- 身体 -->
      <section v-if="$slots.default" class="f-drawer__body">
        <slot />
      </section>

      <!-- 页脚 -->
      <footer v-if="$slots.footer" class="f-drawer__footer">
        <slot name="footer" />
      </footer>
    </div>
  </f-popup>
</template>
