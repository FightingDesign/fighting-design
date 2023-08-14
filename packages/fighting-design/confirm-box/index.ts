import ConfirmBox from './src/confirm-box.vue'
import { useConfirmBox } from '../_hooks'
import { installFn } from '../_utils'

const { confirmBox } = useConfirmBox(ConfirmBox)

export const FConfirmBox = installFn(confirmBox, 'FConfirmBox')

// export type ConfirmBoxInstance = InstanceType<typeof ConfirmBox>

export * from './src/interface'

// export default FConfirmBox
