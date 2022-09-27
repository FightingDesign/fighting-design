import Footer from './src/footer.vue'

import { install } from '../_utils'

export const FFooter = install(Footer)

export type FooterInstance = InstanceType<typeof Footer>

export type { FooterPropsType } from './src/footer'

declare module 'vue' {
  export interface GlobalComponents {
    FFooter: typeof FFooter
  }
}
