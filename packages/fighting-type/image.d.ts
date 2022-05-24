export interface LazyInterface {
  img: HTMLImageElement
  observer(): IntersectionObserver
  createImg(): void
  onerror(): void
  onload(): void
}

export interface loadImageInterface {
  (): void
}

export interface LoadInterface {
  img: HTMLImageElement
  createImg(): void
}

export interface creationMethodInterface {
  (instance: Lazy | Load): void
}
