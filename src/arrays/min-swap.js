export default function minSwaps (arr) {
  let swapCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== (i + 1)) {
      const index = arr.findIndex(a => a === (i + 1))
      const temp = arr[index]
      arr[index] = arr[i]
      arr[i] = temp
      swapCount++
    }
  }

  return swapCount
}
