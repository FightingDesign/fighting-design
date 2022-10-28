import Button from './src/button.vue'

import { install } from '../_utils'

export const FButton = install(Button)

export type ButtonInstance = InstanceType<typeof Button>

export * from './src/interface.d'

export default Button
