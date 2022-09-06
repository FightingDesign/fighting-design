import Image from './src/image.vue'

import { install } from '../_utils'

/* @__PURE__ */ install(Image)

export const FImage = Image

export type FImageInstance = InstanceType<typeof Image>
