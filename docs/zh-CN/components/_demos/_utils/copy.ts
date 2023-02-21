import { FMessage } from '../../../../packages/fighting-design/message'

export const onCopy = (target: string): void => {
  navigator.clipboard.writeText(target)

  FMessage({ message: '复制成功', type: 'primary' })
}
