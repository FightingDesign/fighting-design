import Footer from './src/footer.vue'

import style from '../../fighting-theme/src/footer.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FFooter: ComponentPublicInstance = installWebComponent(Footer, style)

/** footer 组件实例类型 */
export type FooterInstance = InstanceType<typeof Footer>

export * from './src/interface'

export default FFooter
