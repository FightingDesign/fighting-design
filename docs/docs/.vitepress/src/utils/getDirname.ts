import { fileURLToPath } from 'url'
import path from 'path'

export const getDirname = (importMetaUrl: string) => path.dirname(fileURLToPath(importMetaUrl))
