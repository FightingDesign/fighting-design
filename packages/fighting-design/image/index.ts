import Image from './src/image.vue'

import { install } from '../_utils'

export const FImage = /* @__PURE__ */ () => install(Image)

export type FImageInstance = InstanceType<typeof Image>
