// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export function strToChrMap(str: string): { [key: string]: number } {
  const obj: { [key: string]: number } = {}
  for (const chr of str) {
    obj[chr] = ++obj[chr] || 1
  }
  return obj //?
}

export default function maxChar(str: string): string {
  const map = strToChrMap(str) //?
  const arr = Object.entries(map).sort((a, b) => b[1] - a[1]) //?
  const key = arr[0][0] //?
  return key
}
