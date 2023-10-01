/**
 * Zig Zag
 * Given an array of  distinct integers,
 * transform the array into a zig zag sequence by permuting the array elements.
 * A sequence will be called a zig zag sequence
 * if the first  elements in the sequence are in increasing order
 * and the last  elements are in decreasing order, where .
 */
export default function zigZagFunction (arr) {
  arr.sort((a, b) => a - b)
  const pivot = ((arr.length + 1) / 2) - 1

  const firsPart = arr.slice(0, pivot)
  const middle = arr.slice(-1)
  const lastPart = arr.slice(pivot, arr.length - 1).sort((a, b) => b - a)
  return [...firsPart, ...middle, ...lastPart]
}
