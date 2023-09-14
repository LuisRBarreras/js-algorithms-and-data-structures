/**
 * Missing letters
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */
export default function missingLetter (str) {
  let missingLetter
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i - 1) !== (str.charCodeAt(i) - 1)) {
      missingLetter = String.fromCharCode(str.charCodeAt(i) - 1)
      break
    }
  }
  return missingLetter
}
