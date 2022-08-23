export function convertToId(str: string): string {
  return str.replace(/[-\s]/g, "_").toLowerCase()
}
