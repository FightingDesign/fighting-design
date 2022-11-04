export type { UpLoadPropsType } from './up-load'

export interface UpLoadUpdateFilesInterface {
  (files: File[]): void
}

export interface UpLoadFilterFilesInterface {
  (files: FileList): File[]
}

export interface UpLoadRemoveFileInterface {
  (index: number): void 
}
