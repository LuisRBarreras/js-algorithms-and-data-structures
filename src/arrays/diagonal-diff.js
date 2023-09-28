/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 */
export default function diagonalDifference (arr) {
  let sumLeftToRight = 0; let sumRightToLeft = 0
  for (let i = 0; i < arr.length; i++) {
    sumLeftToRight += arr[i][i]
  }

  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    sumRightToLeft += arr[i][j]
  }

  return Math.abs(sumLeftToRight - sumRightToLeft)
}
