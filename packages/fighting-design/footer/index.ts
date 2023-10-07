import Footer from './src/footer.vue'

import style from '../../fighting-theme/src/footer.scss'

import { installWebComponent } from '../_utils'

import type { ComponentPublicInstance } from 'vue'

export const FFooter: ComponentPublicInstance = installWebComponent(Footer, style)

export * from './src/interface'

export default FFooter
