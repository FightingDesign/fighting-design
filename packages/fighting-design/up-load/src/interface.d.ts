export type { UpLoadPropsType } from './up-load'

/**
 * 更新最新的文件列表
 * 
 * 传入 File 类型的数组
 */
export interface UpLoadUpdateFilesInterface {
  (files: File[]): void
}

/**
 * 过滤文件
 * 
 * 传入 FileList 对象，通过过滤，返回 File 类型的数组
 */
export interface UpLoadFilterFilesInterface {
  (files: File[]): File[]
}

/**
 * 删除文件
 * 
 * 通过传入索引值删除指定的文件
 */
export interface UpLoadRemoveFileInterface {
  (index: number): void
}
