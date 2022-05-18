import type { PropType } from 'vue'

type Size = 'large' | 'middle' | 'small' | 'mini'

export const props = {
  size: {
    type: String as PropType<Size>,
    default: (): string => 'middle',
    validator(val: string): boolean {
      return [
        'large',
        'middle',
        'small',
        'mini',
        ''
      ].includes(val)
    }
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false
  }
} as const
