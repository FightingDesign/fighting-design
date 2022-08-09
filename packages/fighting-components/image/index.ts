import FImage from './src/image.vue'

import { install } from '../_utils'

install(FImage, FImage.name)

export type FImageInstance = InstanceType<typeof FImage>

export default FImage
