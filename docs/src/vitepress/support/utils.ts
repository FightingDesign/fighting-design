import { withBase } from 'vitepress'
import { ref } from 'vue'

export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/
export const outboundRE = /^[a-z]+:/i

export function isExternal(path: string): boolean {
  return outboundRE.test(path)
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function normalizeLink(url: string): string {
  if (isExternal(url)) {
    return url
  }
  const { pathname, search, hash } = new URL(url, 'http://vuejs.org')
  return withBase(
    pathname.endsWith('/') || pathname.endsWith('.html')
      ? url
      : `${pathname.replace(/(\.md)?$/, '.html')}${search}${hash}`
  )
}

const inBrowser = typeof window !== 'undefined'
const hashRef = ref(inBrowser ? location.hash : '')
if (inBrowser) {
  window.addEventListener('hashchange', () => {
    hashRef.value = location.hash
  })
}

export function isActive(
  currentPath: string,
  matchPath?: string,
  asRegex = false
): boolean {
  if (matchPath === undefined) {
    return false
  }
  currentPath = normalize(`/${currentPath}`)
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath)
  } else {
    if (normalize(matchPath) !== currentPath) {
      return false
    }
    const hashMatch = matchPath.match(hashRE)
    if (hashMatch) {
      return hashRef.value === hashMatch[0]
    }
    return true
  }
}

export function normalize(path: string): string {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}
