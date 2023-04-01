import Footer from './src/footer.vue'

import { install } from '../_utils'

export const FFooter = install(Footer)

/** footer 组件实例类型 */
export type FooterInstance = InstanceType<typeof Footer>

export * from './src/interface'

export default FFooter
