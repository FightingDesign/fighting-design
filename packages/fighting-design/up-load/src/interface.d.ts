export type { UpLoadPropsType } from './up-load'

/**
 * 删除文件
 *
 * 通过传入索引值删除指定的文件
 *
 * @param index 需要删除的索引
 */
export interface UpLoadRemoveFileInterface {
  (index: number): void
}
