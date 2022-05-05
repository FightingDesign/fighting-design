import { PropType } from 'vue'

type Size = 'large' | 'middle' | 'small' | 'mini'

export const Props = {
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
} as const
