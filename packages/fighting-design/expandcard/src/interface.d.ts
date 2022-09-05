interface imageListInterface {
    url: string
    text?: string // 可选描述
}

export type imageListType = imageListInterface[]
export type round = boolean | number;