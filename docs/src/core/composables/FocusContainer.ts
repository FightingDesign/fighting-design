import { Ref, ref, watch, readonly, onUnmounted } from 'vue'

interface FocusContainerOptions {
  elRef: Ref<HTMLElement | undefined>
  onFocus?: () => void
  onBlur?: () => void
}

export const focusedElement = ref<HTMLElement>()
let active = false
let listeners = 0

export function useFocusContainer(options: FocusContainerOptions) {
  const containsFocus = ref(false)
  if (typeof window !== 'undefined') {
    !active && activateFocusTracking()
    listeners++

    const unwatch = watch(focusedElement, (el) => {
      if (
        el === options.elRef.value ||
        options.elRef.value?.contains(el as Node)
      ) {
        containsFocus.value = true
        options.onFocus?.()
      } else {
        containsFocus.value = false
        options.onBlur?.()
      }
    })

    onUnmounted(() => {
      unwatch()
      listeners--
      if (!listeners) {
        deactivateFocusTracking()
      }
    })
  }

  return readonly(containsFocus)
}

function activateFocusTracking() {
  document.addEventListener('focusin', handleFocusIn)
  active = true
  focusedElement.value = document.activeElement as HTMLElement
}

function deactivateFocusTracking() {
  document.removeEventListener('focusin', handleFocusIn)
}

function handleFocusIn() {
  focusedElement.value = document.activeElement as HTMLElement
}
