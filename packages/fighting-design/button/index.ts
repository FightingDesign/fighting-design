import Button from './src/button.vue'

import { install } from '../_utils'

export const FButton = install(Button)

export type FButtonInstance = InstanceType<typeof Button>
