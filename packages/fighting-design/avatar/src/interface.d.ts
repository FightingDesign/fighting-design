export type { AvatarPropsType } from './props'

export type AvatarFitType =
  | 'fill'
  | 'contain'
  | 'cover'
  | 'none'
  | 'scale-down'
  | ''

export type AvatarSizeType = 'large' | 'middle' | 'small' | 'mini'

export interface AvatarCallBackInterface {
  (evt: MouseEvent): void
}
