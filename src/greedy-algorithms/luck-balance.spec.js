import luckBalance from './luck-balance.js'

describe('Luck Balance', () => {
  it('Case: 6 contests, 4 important and 2 non important', () => {
    luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]).should.be.equal(29)
  })
})
