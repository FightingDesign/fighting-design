import FNovelCoronavirus from './src/novel-coronavirus.vue'

import { install } from '../_utils'

install(FNovelCoronavirus, FNovelCoronavirus.name)

export type FNovelCoronavirusInstance = InstanceType<typeof FNovelCoronavirus>

export default FNovelCoronavirus
