export type { TagPropsType } from './tag'

export type TagSizeType = 'large' | 'middle' | 'small' | 'mini'

export type TagType = 'default' | 'primary' | 'success' | 'danger' | 'warning'

export interface TagTHandleCloseInterface {
  (evt: Event): void
}
