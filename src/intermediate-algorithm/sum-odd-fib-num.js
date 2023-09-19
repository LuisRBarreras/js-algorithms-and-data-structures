function _fib (num, cache) {
  if (!cache[num]) {
    cache[num] = _fib(num - 1, cache) + _fib(num - 2, cache)
  }

  return cache[num]
}

/**
 * Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * Every additional number in the sequence is the sum of the two previous numbers.
 * The first seven numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 */
export default function sumOddFibs (num) {
  const cache = [1, 1]

  let sum = 0
  for (let i = 0; i < num; i++) {
    const result = _fib(i, cache)
    if (result % 2 === 1 && result <= num) {
      sum += result
    }

    if (result > num) break
  }
  return sum
}
