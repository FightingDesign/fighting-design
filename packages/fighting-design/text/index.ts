import Text from './src/text.vue'

import { install } from '../_utils'

export const FText = install(Text)

export type TextInstance = InstanceType<typeof Text>

export type { TextPropsType } from './src/text'

export type { TextType } from './src/interface'

declare module 'vue' {
  export interface GlobalComponents {
    FText: typeof FText
  }
}
