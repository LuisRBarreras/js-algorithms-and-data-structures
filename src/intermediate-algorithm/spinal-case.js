/**
* Spinal Tap Case
* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
**/
function spinalCase (str) {
  return str.split(/(?=[A-Z])|_|-| /).join('-').toLowerCase()
}

export { spinalCase }
