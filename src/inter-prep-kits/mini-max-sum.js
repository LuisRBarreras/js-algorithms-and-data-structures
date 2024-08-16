/**
 * Given five positive integers,
 * find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */

export default function miniMaxSum (arr) {
  arr.sort((a, b) => a - b)
  const min = arr.slice(0, 4).reduce((acc, n) => acc + n, 0)
  const max = arr.slice(-4).reduce((acc, n) => acc + n, 0)
  return `${min} ${max}`
}
