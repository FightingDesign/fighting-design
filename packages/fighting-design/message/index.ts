import FMessage from './src/method'

import { installFn } from '../_utils'

installFn(FMessage, 'FMessage')

export type { FMessageInstance } from '../_hooks/useMessageMange'

export default FMessage
