import Main from './src/main.vue'

import { install } from '../_utils'

export const FMain = install(Main)

export type MainInstance = InstanceType<typeof Main>

export * from './src/interface.d'

export default Main
