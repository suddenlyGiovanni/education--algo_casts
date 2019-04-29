// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

interface ChrMap {
  [key: string]: number
}

export function characterMap(str: string): ChrMap {
  const characters: ChrMap = {}
  for (const char of str) {
    const _char = char.toString()
    characters[_char] = characters[_char]++ || 1
  }
  return characters
}

export function isEqual(a: ChrMap, b: ChrMap): boolean {
  if (a === b) return true // the map are equal by reference
  const propsA = Object.getOwnPropertyNames(a)
  const propsB = Object.getOwnPropertyNames(b)
  if (propsA.length !== propsB.length) return false

  for (const key of propsA) {
    if (a[key] !== b[key]) return false
  }

  // the map are equal by value
  return true
}

export default function anagrams(stringA: string, stringB: string): boolean {
  const escapeStr = (_str: string): string =>
    _str.replace(/[^\w]/g, '').toLowerCase()
  const strMapA = characterMap(escapeStr(stringA)) //?
  const strMapB = characterMap(escapeStr(stringB)) //?
  return isEqual(strMapA, strMapB)
}
