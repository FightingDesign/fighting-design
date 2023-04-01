import Image from './src/image.vue'

import { install } from '../_utils'

export const FImage = install(Image)

/** image 组件实例类型 */
export type ImageInstance = InstanceType<typeof Image>

export * from './src/interface'

export default FImage
