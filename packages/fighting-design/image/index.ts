import FImage from './src/image.vue'

import { install } from '../_utils'

export type FImageInstance = InstanceType<typeof FImage>

export default install(FImage, FImage.name)
