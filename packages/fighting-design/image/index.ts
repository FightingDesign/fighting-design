import Image from './src/image.vue'

import { install } from '../_utils'

export const FImage = install(Image)

export type ImageInstance = InstanceType<typeof Image>

export * from './src/interface.d'

export default FImage
