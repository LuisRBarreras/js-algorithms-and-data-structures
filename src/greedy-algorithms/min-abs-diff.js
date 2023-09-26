export default function minimumAbsoluteDifference (arr) {
  let min = Number.MAX_SAFE_INTEGER
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length - 1; i++) {
    const result = Math.abs(arr[i] - arr[i + 1])
    if (result < min) {
      min = result
    }
  }

  return min
}
