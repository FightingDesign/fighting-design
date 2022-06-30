import { isBoolean, isNumber } from '@vueuse/core'

export const affixProps = {
  zIndex: {
    type: Number,
    default: 100
  },
  target: {
    type: String,
    default: ''
  },
  offset: {
    type: Number,
    default: 0
  },
  position: {
    type: String,
    values: ['top', 'bottom'],
    default: 'top'
  }
}

export const affixEmits = {
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) => {
    return isNumber(scrollTop) && isBoolean(fixed)
  },
  change: (fixed: boolean) => isBoolean(fixed)
}
