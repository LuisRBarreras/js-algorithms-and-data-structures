import diagonalDifference from './diagonal-diff.js'

describe('Diagonal Diff', () => {
  it('Case square matrix of 3', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9]
    ]

    diagonalDifference(array).should.be.equal(2)
  })
})
