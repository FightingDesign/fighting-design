export type { UpLoadPropsType } from './up-load'

/**
 * 更新最新的文件列表
 *
 * @param files 传入 File 类型的数组
 */
export interface UpLoadUpdateFilesInterface {
  (files: File[]): void
}

/**
 * 过滤文件
 *
 * 传入 FileList 对象，通过过滤，返回 File 类型的数组
 * 
 * @param files 需要过滤的文件列表
 */
export interface UpLoadFilterFilesInterface {
  (files: File[]): File[]
}

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
