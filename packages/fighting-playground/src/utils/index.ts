import { unzlibSync, strToU8, strFromU8 } from 'fflate'

/**
 * prefer old unicode hacks for backward compatibility
 *
 * @see Base64.Guru https://base64.guru/developers/javascript/examples/unicode-strings
 * @param { string } data
 */
export const utoa = (data: string): string => {
  return btoa(unescape(encodeURIComponent(data)))
}

export const atou = (base64: string): string => {
  const binary: string = atob(base64)

  if (binary.startsWith('\x78\xDA')) {
    const buffer: Uint8Array = strToU8(binary, true)
    const unzipped: Uint8Array = unzlibSync(buffer)
    return strFromU8(unzipped)
  }

  /**
   * old unicode hacks for backward compatibility
   *
   * @see Base64.Guru https://base64.guru/developers/javascript/examples/unicode-strings
   */
  return decodeURIComponent(escape(binary))
}
