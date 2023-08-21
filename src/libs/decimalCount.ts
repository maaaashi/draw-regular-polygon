export const decimalCount = (str: string): number => {
  const dotIndex = str.indexOf('.')

  if (dotIndex === -1) return 0

  return str.length - dotIndex - 1
}
