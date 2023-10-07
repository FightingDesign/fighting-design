export const setWebComponentName = (
  name: string
): string => {
  const result = name.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}
