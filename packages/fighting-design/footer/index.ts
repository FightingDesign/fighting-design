import Footer from './src/footer.vue'

import { install } from '../_utils'

export const FFooter = install(Footer)

export type FFooterInstance = InstanceType<typeof Footer>

declare module 'vue' {
  export interface GlobalComponents {
    FFooter: typeof FFooter
  }
}
