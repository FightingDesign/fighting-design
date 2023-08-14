import ConfirmBox from './src/confirm-box.vue'
import { useConfirmBox } from '../_hooks'
import { install } from '../_utils'

const { confirmBox } = useConfirmBox(ConfirmBox)

export const FConfirmBox = install(ConfirmBox)

export type ConfirmBoxInstance = InstanceType<typeof ConfirmBox>

export * from './src/interface'

export default FConfirmBox
